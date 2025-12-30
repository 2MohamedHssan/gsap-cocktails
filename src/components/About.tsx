import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"

function About() {
  const titleRef=useRef<any>(null)
  const aboutRef=useRef<any>(null)
  const paraRef=useRef<any>(null)
  useGSAP(()=>{
    const titleSplittext=SplitText.create(titleRef.current,{
      type:'words'
    })
    const paraSplitText=SplitText.create(paraRef.current,{
      type:'lines'
    })
    
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:aboutRef.current,
        start:'top 60%',
        end:'bottom bottom'
      }
    })

    tl.from(paraSplitText.lines,{
      opacity:0,
      duration:1,
      ease:'expo.out',
      stagger:0.05,
      yPercent:100
    })
    .from(titleSplittext.words,{
      opacity:0,
      duration:1,
      ease:'expo.out',
      stagger:0.08,
      yPercent:100,
    },0)
    .from('.top-grid div, .bottom-grid div',{
      opacity:0,
      duration:1,
      ease:'power1.in',
      stagger:0.04
    },"<")

    
  },[])
  return (
    <div id="about" ref={aboutRef}>
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2 ref={titleRef}>Where ervy details matters <span className="text-white">-</span> form muddle to garnish</h2>
          </div>
          <div className="sub-content">
            <p ref={paraRef}>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish.
            That care is what turns a simple drink into something truly memorable. 
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="nosy"/>
          <img src="/images/abt1.png" alt="grid-img1" />
        </div>
        <div className="md:col-span-6">
          <div className="nosy"/>
          <img src="/images/abt2.png" alt="grid-img3" />
        </div>
        <div className="md:col-span-3">
          <div className="nosy"/>
          <img src="/images/abt5.png" alt="grid-img5" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="nosy"/>
          <img src="/images/abt3.png" alt="grid-img5" />
        </div>
        <div className="md:col-span-4">
          <div className="nosy"/>
          <img src="/images/abt4.png" alt="grid-img5" />
        </div>
      </div>
    </div>
  )
}

export default About