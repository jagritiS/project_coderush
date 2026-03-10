# Responsive Web Design and JavaScript

## Topics & Quick‑Start Code Snippets

### 1️⃣ Responsive Design
**What it is** – Building layouts that adapt to any screen width using flexible units and media queries.

```html
<!-- index.html (excerpt) -->
<div class="hero">
  <h1>Welcome to the Demo</h1>
</div>
```
```css
/* Base – mobile first */
.hero {height:60vh; background:#3498db; color:#fff; display:flex; align-items:center; justify-content:center;}

/* Tablet & larger */
@media (min-width:600px) {
  .hero {height:80vh;}
}
```

### 2️⃣ Flexbox Layout
**What it is** – One‑dimensional layout model that distributes space along a row or column.

```html
<div class="nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</div>
```
```css
.nav {display:flex; gap:1rem; background:#333; padding:0.5rem;}
.nav a {color:#fff; text-decoration:none;}
```

### 3️⃣ Media Queries
**What they are** – Conditional CSS that applies only when the viewport matches a given size.

```css
/* Mobile – single column */
.grid {display:grid; grid-template-columns:1fr; gap:1rem;}

/* Desktop – three columns */
@media (min-width:900px) {
  .grid {grid-template-columns:repeat(3,1fr);}
}
```

### 4️⃣ JavaScript Functions
**What they are** – Reusable blocks of code that can be called with arguments.

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Anuja'));
```

### 5️⃣ DOM Manipulation
**What it is** – Changing the document structure, content, or attributes from JavaScript.

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<button id="addBtn">Add Item</button>
```
```js
document.getElementById('addBtn').addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'New item';
  document.getElementById('list').appendChild(li);
});
```

### 6️⃣ Event Listeners
**What they are** – Functions that run in response to user actions such as clicks, mouse moves, or key presses.

```html
<button id="colorBtn">Change Background</button>
```
```js
document.getElementById('colorBtn').addEventListener('click', () => {
  const hue = Math.floor(Math.random() * 360);
  document.body.style.background = `hsl(${hue}, 50%, 90%)`;
});
```

---



## Explore Further
- Combine **media queries** with **Flexbox** or **CSS Grid** to build fully responsive dashboards.
- Add a **dark‑mode toggle** using CSS custom properties (`--bg`, `--text`).
- Use the **Fetch API** to load external JSON data and render it dynamically.
- Experiment with **CSS animations** for smoother UI interactions.

Happy coding! 🎉