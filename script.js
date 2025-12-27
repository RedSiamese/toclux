// script.js
// 依赖 data.js 中的 categories 数组

const gallery = document.getElementById("work");

function parseDoc(text, fallbackTitle) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  let title = lines[0] || fallbackTitle || "Unknown Category";
  if (title.startsWith("#")) {
    title = title.replace(/^#+\s*/, "");
  }

  // Categories don't have Amazon links at the bottom usually, 
  // but we keep the logic generic just in case.
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

function renderCategory(category, index, doc) {
  const article = document.createElement("article");
  article.className = "project";
  article.style.animationDelay = `${index * 0.2}s`;

  // Categories images are directly in the category folder
  const imageRoot = `${category.folder}/`;
  const displayImages = category.images.slice(0, 5);
  
  const slidesHtml = displayImages.map((img, i) => `
    <div class="slide" id="slide-${category.id}-${i}">
      <a href="category.html?id=${category.id}">
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
      <div class="slider-track" id="track-${category.id}">
        ${slidesHtml}
      </div>
      <div class="slider-dots" id="dots-${category.id}">
        ${dotsHtml}
      </div>
    </div>
    <div class="project-info">
      <span class="project-meta">NO. 0${index + 1} — CATEGORY</span>
      <h2 class="project-title">${doc.title}</h2>
      <p class="project-desc">${doc.description || "Explore this collection."}</p>
      <a href="category.html?id=${category.id}" class="btn-link">View Collection</a>
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
      categories.map(async (c) => {
        const rawTitle = (c.folder || c.id || "Category");
        const fallbackTitle = rawTitle.replace(/[-_]+/g, " ");
        try {
          const response = await fetch(`${c.folder}/doc.md`);
          if (!response.ok) throw new Error(`Doc not found for ${c.id}`);
          return parseDoc(await response.text(), fallbackTitle);
        } catch (err) {
          console.error(`Failed to load category doc for ${c.id}`, err);
          return { title: fallbackTitle, link: "#", description: "" };
        }
      })
    );

    gallery.innerHTML = "";
    docs.forEach((doc, i) => {
      gallery.appendChild(renderCategory(categories[i], i, doc));
    });
  } catch (err) {
    console.error(err);
    gallery.innerHTML = `<div style="padding:40px">Unable to load categories.</div>`;
  }
}

init();
