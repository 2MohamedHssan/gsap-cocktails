import { useRef, useState } from "react"
import { sliderLists } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Menu() {
  const [currentIndex,setCurrentIndex]=useState<number>(0)
  const contentRef=useRef<any>(null)
  const total=sliderLists.length
  const gotoslid=(index:number)=>{
    const newInedx=(index+total)%total
    setCurrentIndex(newInedx)
  }
  const getCurentItem=(index:number)=>{
    return sliderLists[(+currentIndex+ index + (+total)) % total]
  }

  useGSAP(()=>{
    gsap.fromTo('#title',{opacity:0 ,x:-100},{opacity:1, x:0 ,duration:1})
    gsap.fromTo('.details h2',{opacity:0 ,yPercent:100},{opacity:1, yPercent:0 ,duration:1})
    gsap.fromTo('.details p',{opacity:0 ,yPercent:100},{opacity:1, yPercent:0 ,duration:1})
    gsap.fromTo('.cocktail img',{opacity:0 ,xPercent:-100},{opacity:1, xPercent:0 ,ease:'power1.inOut',duration:1})
  },[currentIndex])


  const currentItem=getCurentItem(0)
  const prevItem=getCurentItem(-1)
  const nextItem=getCurentItem(1)
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leave.png" id="m-left-leave" alt="left-leave" />
      <img src="/images/slider-right-leave.png" id="m-right-leave" alt="right-leave" />
      
      <h2 id="menu-heading" className="sr-only"> Cocktail Menu</h2>
      <nav className="cocktail-tabs" aria-label="Cocktail-Navigation">
      {sliderLists.map((slider,index)=>{
        const isActive=index===currentIndex
        return(
          <button key={index} onClick={()=>gotoslid(index)} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}>{slider.name}</button>
        )
      })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={()=>gotoslid(currentIndex - 1)}>
            <span>{prevItem.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>
        
          <button className="text-left" onClick={()=>gotoslid(currentIndex + 1)}>
            <span>{nextItem.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentItem.image} alt="" />
        </div>
      </div>
      <div className="recipe">
        <div ref={contentRef} className="info">
          <p>Recipe for:</p>
          <p id="title">{currentItem.name}</p>
        </div>
        <div className="details">
          <h2>{currentItem.title}</h2>
          <p>{currentItem.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Menu