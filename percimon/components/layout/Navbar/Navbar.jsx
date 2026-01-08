'use client'

//Componente
import Logo from './Logo';

//Estilos
import styles from './Navbar.module.scss';

//externos
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import useNavBarAnimations from '@hooks/useNavBarAnimations'
import { useRef } from 'react';

export default function Navbar() {
    const logo = useRef()
    const links = useRef()
    const socialIcon = useRef()
    const navBar = useRef()

    useNavBarAnimations({navBar, logo, links, socialIcon})

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