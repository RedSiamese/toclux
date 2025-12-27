// detail.js
// 依赖 data.js 中的 products 数组

const container = document.getElementById("detail-container");

// 工具：解析 MD
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

  // 剩余部分作为完整描述
  const features = lines.filter((line) => line !== lines[0] && line !== link);
  
  return { title, link, features };
}

async function initDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    window.location.href = "index.html";
    return;
  }

  const product = products.find((p) => p.id === id);

  if (!product) {
    container.innerHTML = `<div class="error">Product not found in archive.</div>`;
    return;
  }

  try {
    const response = await fetch(`${product.folder}/doc.md`);
    if (!response.ok) throw new Error("Doc not found");
    const text = await response.text();
    const doc = parseDoc(text);

    renderPage(product, doc);
  } catch (err) {
    console.error(err);
    container.innerHTML = `<div class="error">Data corruption detected. Unable to load file.</div>`;
  }
}

function renderPage(product, doc) {
  const imageRoot = `${product.folder}/`;

  // 1. 生成所有图片网格
  const imagesHtml = product.images.map((img) => `
    <div class="gallery-item">
      <img src="${imageRoot}${img}" alt="${doc.title}" loading="lazy">
    </div>
  `).join("");

  // 2. 生成完整描述 HTML
  const descriptionHtml = doc.features.map(f => {
      // 简单的标题加粗处理
      if (f.startsWith("【") || f.startsWith("**")) {
          return `<p class="spec-highlight">${f}</p>`;
      }
      return `<p>${f}</p>`;
  }).join("");

  // 3. 组装页面
  container.innerHTML = `
    <header class="detail-header">
      <div class="header-content">
        <span class="detail-meta">ARCHIVE ID: ${product.id} — ${product.category}</span>
        <h1 class="detail-title">${doc.title}</h1>
        <div class="detail-actions">
           <a href="${doc.link}" target="_blank" class="btn-purchase">
             <span>Purchase on Amazon</span>
             <span class="arrow">↗</span>
           </a>
        </div>
      </div>
      <div class="header-desc">
        ${descriptionHtml}
      </div>
    </header>

    <section class="detail-gallery">
      ${imagesHtml}
    </section>
  `;
}

initDetail();
