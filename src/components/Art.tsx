import { useMediaQuery } from "react-responsive"
import { featureLists, goodLists } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Art() {
  const isMobile=useMediaQuery({maxWidth:767})
  useGSAP(()=>{
    const start = isMobile ? 'top center' : 'top top'
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:'#art',
        start,
        end: '+=150%',
        scrub:1,
        pin:true
      }
    })


    tl
      .to('.will-fade',{ opacity:0,ease:'power1.inOut',stagger:0.1})
      .to('.masked-img',{scale:1.3, maskPosition:'center',maskSize:'400%',ease:'power1.inOut'})
      .to('#masked-content',{opacity:1, ease:'power1.inOut'})
    
  },[])
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((item, index)=>(
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          
          <div className="cocktail-img">
            <img src="/images/under-img.jpg" alt="cocktail" className="abs-center masked-img size-full object-contain" />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((item, index)=>(
              <li key={index} className="flex justify-start items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-64">{item}</p>
              </li>
            ))}
          </ul>

        </div>

        <div className="masked-container ">
          <h2 className="will-fade">Sip-Worthy perfection</h2>
        <div id="masked-content">
          <h3>Made with Craft, Poured with Passion</h3>
          <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Art