import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Initialize Lenis smooth scrolling once on boot
const lenis = new Lenis({
  duration: 1.1,
  smoothWheel: true,
  // easing tuned for a natural feel
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

// Keep ScrollTrigger in sync with Lenis
lenis.on('scroll', () => {
  ScrollTrigger.update()
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
