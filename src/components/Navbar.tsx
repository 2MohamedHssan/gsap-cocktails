import { useGSAP } from '@gsap/react'
import { navLinks } from '../constants'
import gsap from 'gsap'

function Navbar() {
  useGSAP(()=>{
    const navTween=gsap.timeline({
      scrollTrigger:{
        trigger:'nav',
        start:'bottom top'
      }
    })
    navTween.fromTo('nav',{backgroundColor:'transparent'},
      {
        backgroundColor:'#00000050',
        backgroundFilter:'blur(10px)',
        duration:1,
        ease:'power1.inOut'
      })
  },[])
  return (
    <nav>
      <div>
        <a href="#home" className='flex items-center gap-2'>
          <img src="/public/images/logo.png" alt="logo" />
          <p>Velvet pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.title.toLowerCase()}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar