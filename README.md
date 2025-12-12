# GSAP Showcase

<p align="center">
  <img src="src/assets/banner.png" width="100%" alt="GSAP Showcase Banner">
</p>

## 🤖 Introduction

**GSAP Showcase** is a high-performance, immersive website designed to push the boundaries of modern web animation. Inspired by the award-winning "Zentry" aesthetic, this project bridges the gap between gaming visuals and luxury UI design.

It features advanced scroll-triggered animations, geometric transitions, and seamless video storytelling, all built to demonstrate proficiency in **React.js** and the **GSAP** animation library.

## ⚙️ Tech Stack

* **Frontend Framework:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Animation:** GSAP (GreenSock Animation Platform) & ScrollTrigger
* **Icons/Assets:** React Icons / Custom SVG assets

## 🔋 Key Features

* **🌊 Scroll-Based Storytelling:** Dynamic animations triggered by scrolling using GSAP ScrollTrigger to keep users engaged.
* **✨ Geometric Transitions:** Unique CSS `clip-path` animations that morph images and videos into different shapes fluidly.
* **🖱️ 3D Hover Effects:** Interactive elements that respond to mouse movement for a tactile, modern feel.
* **🎥 Seamless Video:** Optimized video backgrounds and transitions that enhance the narrative without sacrificing performance.
* **📱 Fully Responsive:** Flawless adaptation across mobile, tablet, and desktop devices.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/gsap-showcase.git](https://github.com/your-username/gsap-showcase.git)
    cd gsap-showcase
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **View the project**
    Open `http://localhost:5173` in your browser.

## 🕸️ Code Structure

```text
gsap-showcase/
├── public/          # Static assets (images, videos, fonts)
├── src/
│   ├── components/  # Reusable UI components (Navbar, Hero, Features)
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Entry point
│   └── index.css    # Tailwind imports and custom styles
├── tailwind.config  # Tailwind CSS configuration
└── vite.config.js   # Vite configuration
