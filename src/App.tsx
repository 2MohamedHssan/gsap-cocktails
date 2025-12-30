import gsap from "gsap"
import {ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-black h-dvh"></div>
    </main>
  )
}

export default App