# TOCLUX Product Gallery

> A high-performance, minimalist industrial design showcase for aluminum extrusion accessories, transforming a traditional catalog into an immersive digital studio experience.

---

## 🏗️ Design Philosophy (设计理念)

The core design principle is **"Industrial Minimalism"** (工业极简主义). We moved away from traditional e-commerce clutter to focus on the precision and beauty of the engineering components themselves.

### Key Visual Concepts:
*   **Gallery Mode (画廊模式)**: Products are treated as art pieces, displayed with ample whitespace, Z-pattern layout, and subtle hover interactions.
*   **Typography (排版)**: Uses `Italiana` for elegant, editorial-style headlines paired with `Manrope` for clean, technical readability.
*   **Dual Experience (双层体验)**:
    *   **Studio (Home)**: Curated, concise, visual-first browsing.
    *   **Archive (Detail)**: Comprehensive, data-rich technical documentation.

---

## 🛠️ Technical Architecture (技术架构)

The project is built as a **Static Site (静态网站)**, ensuring zero server-side maintenance, high performance, and easy hosting (e.g., GitHub Pages).

### 1. File Structure
```text
/
├── index.html       # Studio View (Home) - The visual showcase
├── detail.html      # Archive View (Detail) - Full specs & gallery
├── styles.css       # Global design system & layout
├── script.js        # Logic for Home (Slider, Scroll Animations)
├── detail.js        # Logic for Detail (Data Parsing, Rendering)
├── data.js          # Single Source of Truth (Product Registry)
└── [ID]/            # Product Data Folders (e.g., "1/", "2/")
    ├── doc.md       # Content: Title, Description, Link
    └── *.jpg        # Product Images
```

### 2. Data Flow
*   **Registry (`data.js`)**: A central JavaScript array defines the product list (`id`, `category`, `images`).
*   **Content Fetching**: The frontend dynamically fetches `doc.md` files from each product folder at runtime using the `Fetch API`.
*   **Parsing**: A custom parser reads the Markdown file to extract:
    *   **Title**: First line (H1).
    *   **Link**: Last line (Amazon URL).
    *   **Features**: All content in between (automatically formatted).

### 3. Key Components
*   **Image Slider**: A custom-built, CSS-scroll-snap based slider. No external libraries. Supports touch swipe and hover-to-switch.
*   **Markdown Parser**: A lightweight client-side text parser to render descriptions and feature lists without heavy dependencies like `marked.js`.

---

## 📖 Content Management (如何管理内容)

Adding a new product is a simple 3-step process that requires no code changes to the HTML.

### Step 1: Create Folder
Create a new folder in the root directory named after your product ID (e.g., `14`).

### Step 2: Add Assets
Inside the folder, place your images and a `doc.md` file.

**`doc.md` Format:**
```markdown
Product Title Here

Product description paragraph 1.
Product description paragraph 2.

【Features】
- Feature point A
- Feature point B

https://www.amazon.com/your-product-link
```

### Step 3: Register
Open `data.js` and add a new entry to the `products` array:

```javascript
{
  id: "14",
  category: "Series 2020",
  images: [
    "image1.jpg",
    "image2.jpg"
  ]
}
```

---

## 🚀 Deployment (部署)

Since this is a static site, you can deploy it anywhere.

**GitHub Pages (Recommended):**
1.  Push this repository to GitHub.
2.  Go to Settings > Pages.
3.  Select `main` branch and `/ (root)` folder.
4.  Save. Your site is live!

---

## 🔮 Future Roadmap (未来规划)

*   **Search Functionality**: Client-side search filtering by category or keyword.
*   **Dark Mode**: A toggle for a "Night Shift" industrial dark theme.
*   **3D Viewer**: Integration of `.stl` or `.obj` files for interactive product rotation.

---

© 2025 TOCLUX Design.
