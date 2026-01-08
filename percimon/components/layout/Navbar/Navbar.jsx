'use client'
//Animaciones
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'

//Componente
import Logo from './Logo';

//Estilos
import styles from './Navbar.module.scss';

//externos
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
    const logo = useRef()
    const links = useRef()
    const socialIcon = useRef()
    const navBar = useRef()

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

    return (
        <nav ref={navBar} className={styles.navbar}>
            <div ref={logo} className={styles.navbar__logo}>
                <Logo className={styles.navbar__svg}/>
            </div>
            
            <ul ref={links} className={styles.navbar__list}>
                <li className={styles.navbar__item}><Link href="/">Cultura</Link></li>
                <li className={styles.navbar__item}><Link href="/products">Productos</Link></li>
                <li className={styles.navbar__item}><Link href="/order">Haz tu pedido</Link></li>
                <li className={styles.navbar__item}><Link href="/work">Trabaja aquí</Link></li>
                <li className={styles.navbar__item}><Link href="/find">Encuéntranos</Link></li>
                <li className={styles.navbar__item}><Link href="/contact">Contacto</Link></li>
            </ul>

            <div ref={socialIcon} className={styles.navbar__social}>
                <Instagram />
                <Facebook />
            </div>
        </nav>
    );
}