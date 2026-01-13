'use client'

// Animaciones
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useFooterAnimations({ logoFooter, socialIcons, menuColumns }) {
    useGSAP(() => {
        gsap.fromTo(logoFooter.current,{
            rotate: -80,
            x: -120,
            opacity: 0
        },
        {
            x: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: logoFooter.current,
                start: 'top 80%',
                once: true
            }
        }
    )

    // Redes sociales
    gsap.from(socialIcons.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.35,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: socialIcons.current,
            start: 'top 85%',
            once: true
        }
    })

    // Columnas del footer
    gsap.from(menuColumns.current.children, {
        y: 15,
        opacity: 0,
        stagger: 0.1,
        duration: 0.35,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: menuColumns.current,
            start: 'top 85%',
            once: true
        }
    })
}, [])
}
