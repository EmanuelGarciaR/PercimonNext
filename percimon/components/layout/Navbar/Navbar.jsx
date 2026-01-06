import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import { Instagram, Facebook } from 'lucide-react';
import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <Logo className={styles.navbar__svg}/>
            </div>
            
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}><Link href="/">Cultura</Link></li>
                <li className={styles.navbar__item}><Link href="/products">Productos</Link></li>
                <li className={styles.navbar__item}><Link href="/order">Haz tu pedido</Link></li>
                <li className={styles.navbar__item}><Link href="/work">Trabaja aquí</Link></li>
                <li className={styles.navbar__item}><Link href="/find">Encuéntranos</Link></li>
                <li className={styles.navbar__item}><Link href="/contact">Contacto</Link></li>
            </ul>

            <div className={styles.navbar__social}>
                <Instagram />
                <Facebook />
            </div>
        </nav>
    );
}