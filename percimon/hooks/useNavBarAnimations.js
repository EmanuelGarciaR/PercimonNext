'use client'
//Animaciones
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useNavBarAnimations({navBar, logo, links, socialIcon}){
    useGSAP(()=>{
        const tl = gsap.timeline()

        //Logo rebote
        tl.fromTo(logo.current,{ 
            y: -80, 
            opacity: 0 
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'bounce'
        }
        )

        //Links cayendo
        const items = links.current.querySelectorAll('li')
        tl.from(items,{
            y: -80,
            duration: 0.25,
            stagger: 0.03,
            ease: 'power3.out',
        }, '-=0.6')

        tl.from(socialIcon.current, {
            y:-80,
            duration: 0.25,
            stagger: 0.03,
            ease: 'power3.out'
        }, '-=0.45')

        //Scroll
        // esconder nav
        let lastScroll = 0
        let linksAnimated = false
        const hideNav = gsap.to(navBar.current, {
            y: '-100%',
            duration: 0.3,
            ease: 'power3.inOut',
            paused: true,
        })

        //Animar links e iconos
        

        ScrollTrigger.create({
            start: 100,
            end: 'max',
            onUpdate(self) {
                const current = self.scroll()
                if (current > lastScroll && current > 100){
                    // Scrolling down - hide navbar
                    hideNav.play()
                }
                if (current < lastScroll){
                    // Scrolling up or at top - show navbar
                    hideNav.reverse()
                    if (!linksAnimated){
                        linksAnimated = true
                        gsap.from(links.current.querySelectorAll('li'),{
                            y: -20,
                            opacity: 0,
                            duration: 0.2,
                            stagger: 0.04,
                            ease: 'power3.out',
                        }
                        )
                        gsap.from(socialIcon.current,{
                            y: -15,
                            opacity: 0,
                            duration: 0.2,
                            stagger: 0.1,
                            ease: 'power3.out',
                        }
                        )
                    }
                }
                lastScroll = current
            },
        })
    })
}