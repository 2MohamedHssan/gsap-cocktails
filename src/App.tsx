import gsap from "gsap"
import {ScrollTrigger, SplitText } from "gsap/all"

function App() {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  return (
    <div className="flex-center h-screen text-7xl text-indigo-600">
      <h1>Hello Gsap!</h1>
    </div>
  )
}

export default App