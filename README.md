# Monster Energy Experience 🟢⚡

A sleek, dynamic, and immersive single-page web application built for the Monster Energy brand. This project demonstrates modern web design principles, featuring extensive use of **GSAP (GreenSock Animation Platform)** for scroll-triggered animations, interactive 3D-like product showcases, and a modular architecture.

## ✨ Features

- **Immersive GSAP Animations**: Custom scroll-spy navigation, entrance animations, and a floating canonical product showcase that reacts to scroll depth.
- **Dynamic Flavour Switcher**: Fluidly swap between different Monster Energy flavours (Original, Lo-Carb, Assault, Ultra) with an animated liquid-crystal button interface that dynamically updates the site's entire accent color theme and background glow.
- **Interactive Can-Catcher Mini-Game**: Built-in HTML5 Canvas mini-game where players catch falling Monster Energy logos using a mouse-controlled paddle.
- **News & Events Modals**: Glassmorphic overlays with smooth entrance transitions for exploring event details and the latest Monster Energy news (F1, Rally, Gaming, MMA).
- **Custom Cursor Engine**: A custom dot-and-ring cursor with magnetic hover effects on interactive UI elements.
- **Functional Shopping Cart**: Add your favorite flavours to a slide-out cart drawer with dynamic subtotal calculation.
- **Modular Architecture**: 
  - CSS is split logically into component-based chunks (`variables.css`, `layout/`, `components/`, `sections/`) and imported via a central `main.css`.
  - JavaScript logic is cleanly divided into scripts (`core.js`, `cart.js`, `news-events.js`, `flavours-modal.js`, `game.js`).
- **Fully Responsive**: Adapts seamlessly from desktop to mobile views and relies on vanilla CSS for styling.

## 📂 Project Structure

```text
organized_code/
├── index.html          # Main Single-Page Application (SPA) entry point
├── assets/
│   └── images/         # Optimized images, logos, and product cans
├── css/
│   ├── main.css        # Central stylesheet importing all modules
│   ├── variables.css   # Base styles, resets, and variables
│   ├── components/     # Modals, Cart, Toast notifications
│   └── sections/       # Hero, Flavours, Events, News, Game
└── js/
    └── modules/
        ├── core.js           # Globals, DOM refs, Loader, Cursors, Setup
        ├── cart.js           # Shopping cart system
        ├── game.js           # Canvas Mini-Game logic
        ├── news-events.js    # More News panel & Event Modals
        └── flavours-modal.js # "Know More" specific flavour detail logic
```

## 🚀 Getting Started

Simply clone the repository and open `index.html` in your web browser. There is no build step or package manager required! The site uses vanilla HTML, CSS, and JavaScript for maximum performance and portability.

For the best experience, and to avoid cross-origin restrictions on some browsers with `file://` URLs, host the folder using a local web server:

### Using VS Code Live Server
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Right-click `index.html` and select **Open with Live Server**.

### Using NodeJS (http-server)
```bash
npx http-server .
```

### Using Python
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## 🛠 Built With

- **HTML5 & Vanilla CSS3**
- **Vanilla JavaScript (ES6)**
- **GSAP (GreenSock Animation Platform)** - Core Engine + ScrollTrigger
- **Glassmorphism Theme**
