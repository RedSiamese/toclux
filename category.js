// category.js
// 依赖 data.js 中的 products 和 categories 数组

const gallery = document.getElementById("work");
const titleEl = document.getElementById("category-title");
const descEl = document.getElementById("category-desc");

function parseDoc(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  let title = lines[0] || "Unknown Object";
  if (title.startsWith("#")) {
    title = title.replace(/^#+\s*/, "");
  }

  let link = "#";
  for (let i = lines.length - 1; i >= 0; i -= 1) {
    if (/^https?:\/\//.test(lines[i])) {
      link = lines[i];
      break;
    }
  }

  const descLines = lines.filter((line) => line !== lines[0] && line !== link);
  let description = descLines.slice(0, 2).join(" ").replace(/[*_#\[\]]/g, "");
  if (description.length > 200) description = description.substring(0, 197) + "...";

  return { title, link, description };
}

function renderProject(product, index, doc) {
  const article = document.createElement("article");
  article.className = "project";
  article.style.animationDelay = `${index * 0.2}s`;

  // Updated image path logic using 'folder' property
  const imageRoot = `${product.folder}/`;
  const displayImages = product.images.slice(0, 5);
  
  const slidesHtml = displayImages.map((img, i) => `
    <div class="slide" id="slide-${product.id}-${i}">
      <a href="detail.html?id=${product.id}">
        <img src="${imageRoot}${img}" alt="${doc.title}" loading="lazy">
      </a>
    </div>
  `).join("");

  const dotsHtml = displayImages.map((_, i) => `
    <div class="dot${i === 0 ? ' active' : ''}" 
         data-index="${i}" 
         aria-label="View view ${i + 1}"></div>
  `).join("");

  article.innerHTML = `
    <div class="project-media">
      <div class="slider-track" id="track-${product.id}">
        ${slidesHtml}
      </div>
      <div class="slider-dots" id="dots-${product.id}">
        ${dotsHtml}
      </div>
    </div>
    <div class="project-info">
      <span class="project-meta">NO. 0${index + 1} — ${product.category}</span>
      <h2 class="project-title">${doc.title}</h2>
      <p class="project-desc">${doc.description || "Precision engineered aluminum component."}</p>
      <a href="detail.html?id=${product.id}" class="btn-link">View Details</a>
    </div>
  `;

  // 绑定轮播交互
  const track = article.querySelector('.slider-track');
  const dots = article.querySelectorAll('.dot');

  dots.forEach((dot, i) => {
    dot.addEventListener('mouseenter', () => {
      const slide = track.children[i];
      if (slide) {
        track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      }
    });
    
    dot.addEventListener('click', () => {
      const slide = track.children[i];
      if (slide) {
        track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
      }
    });
  });

  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollLeft = track.scrollLeft;
      const width = track.offsetWidth;
      if (width > 0) {
        const index = Math.round(scrollLeft / width);
        dots.forEach(d => d.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
      }
    }, 100);
  });

  return article;
}

async function init() {
  if (!gallery) return;

  const params = new URLSearchParams(window.location.search);
  const catId = params.get("id");
  
  if (!catId) {
      window.location.href = "index.html";
      return;
  }

  const category = categories.find(c => c.id === catId);
  if (category) {
      const rawTitle = (category.folder || category.id || "Category");
      const fallbackTitle = rawTitle.replace(/[-_]+/g, " ");
      titleEl.innerHTML = `<span>${fallbackTitle}</span>`;
      document.title = `TOCLUX | ${fallbackTitle}`;
      
      // Fetch and display category description from doc.md
      try {
        const res = await fetch(`${category.folder}/doc.md`);
        if (res.ok) {
            const text = await res.text();
            const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
            let docTitle = lines[0] || fallbackTitle;
            if (docTitle.startsWith("#")) {
                docTitle = docTitle.replace(/^#+\s*/, "");
            }
            if (!docTitle) {
                docTitle = fallbackTitle;
            }
            titleEl.innerHTML = `<span>${docTitle}</span>`;
            document.title = `TOCLUX | ${docTitle}`;
            // Exclude the first line (title) and join the rest
            const descLines = lines.slice(1);
            if (descLines.length > 0) {
                descEl.innerHTML = descLines.join("<br>");
            }
        }
      } catch (e) {
          console.error("Failed to load category doc", e);
      }
  }

  // Filter products for this category
  const categoryProducts = products.filter(p => p.categoryId === catId);

  if (categoryProducts.length === 0) {
      gallery.innerHTML = `<div style="padding:40px; text-align:center;">No products found in this category.</div>`;
      return;
  }
  
  try {
    const docs = await Promise.all(
      categoryProducts.map(async (p) => {
        // Fetch from the new folder path
        const response = await fetch(`${p.folder}/doc.md`);
        if (!response.ok) throw new Error(`Doc not found for ${p.id}`);
        return parseDoc(await response.text());
      })
    );

    gallery.innerHTML = "";
    docs.forEach((doc, i) => {
      gallery.appendChild(renderProject(categoryProducts[i], i, doc));
    });
  } catch (err) {
    console.error(err);
    gallery.innerHTML = `<div style="padding:40px">Unable to load collection.</div>`;
  }
}

init();
