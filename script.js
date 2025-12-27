// script.js
// 依赖 data.js 中的 products 数组

const gallery = document.getElementById("work");

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

  const imageRoot = `${product.id}/`;
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

  // 这里按钮链接改为 detail.html
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
  
  try {
    const docs = await Promise.all(
      products.map(async (p) => {
        const response = await fetch(`${p.id}/doc.md`);
        if (!response.ok) throw new Error(`Doc not found for ${p.id}`);
        return parseDoc(await response.text());
      })
    );

    gallery.innerHTML = "";
    docs.forEach((doc, i) => {
      gallery.appendChild(renderProject(products[i], i, doc));
    });
  } catch (err) {
    console.error(err);
    gallery.innerHTML = `<div style="padding:40px">Unable to load collection.</div>`;
  }
}

init();