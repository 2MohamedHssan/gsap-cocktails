import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '../constants'
import gsap from 'gsap'

function Cocktails() {
  useGSAP(()=>{
    const parallexTimeline=gsap.timeline({
      scrollTrigger:{
        trigger:'#cocktails',
        start:'top 30%',
        end:'bottom 80%',
        scrub:true
      }
    })

    parallexTimeline.from('#c-left-leaf',{
      x: -100, y: 100
    })
    
    .from('#c-right-leaf',{
      x: 100, y: 100
    })
  },[])
  return (
    <section id='cocktails' className='noisy'>
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id='c-left-leaf' />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id='c-right-leaf' />
      <div className='list'>
        <div className='populer'>
          <h2>Most Populer Cocktails</h2>
          <ul>
            {cocktailLists.map(({name,country,detail,price})=>(
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <h3>{country} | {detail}</h3>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='love'>
          <h2>Most loved Cocktails:</h2>
          <ul>
            {mockTailLists.map(({name,country,detail,price})=>(
              <li key={name}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <h3>{country} | {detail}</h3>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails