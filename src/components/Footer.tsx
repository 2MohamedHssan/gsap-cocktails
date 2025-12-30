import { useGSAP } from '@gsap/react'
import { openingHours, socials } from '../constants'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

function Footer() {
  useGSAP(()=>{
    const textSplit=SplitText.create('#contact h2',{type:"words"})
    
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:'#contact',
        start:'top center',
      },
      ease:'power1.inOut'
    })
    tl
    .from(textSplit.words,{opacity:0,yPercent:100,stagger:0.02})
    .from('#contact h3, #contact p ',{opacity:0,yPercent:100,stagger:0.02})
    .to('#f-right-leave',{y:50,duration:1,ease:'power1'})
    .to('#f-left-leave',{y:-50,duration:1,ease:'power1'},'<')
    
  },[])
  return (
    <footer id='contact'>
      <img src="/images/footer-right-leave.png" alt="leave-right" id='f-right-leave' />
      <img src="/images/footer-left-leave.png" alt="leave-left" id='f-left-leave' />

      <div className='content'>
        <h2>Where To find  Us</h2>

        <div>
          <h3>Vist Out Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>01013026172</p>
          <p>mohamed.web.contactme@gmail.com</p>
        </div>
        
        <div>
          <h3>Open Evry Day </h3>
          {openingHours.map(({time,day},index)=>(
            <p key={index}>{day} : {time}</p>
          ))}
        </div>
        
        <div> 
          <h3>Socials</h3>
          <div className='flex-center gap-5'>
            {socials.map(({url,icon,name},index)=>(
              <a href={url} key={index} target='_blacnk' rel='noopener noreferrer' aria-label={name}>
                <img src={icon} alt={name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer