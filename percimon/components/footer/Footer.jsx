'use client'

import Logo from '../layout/Navbar/Logo';
import styles from './Footer.module.scss'
import Link from 'next/link'
import { Linkedin, Instagram, Facebook} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineSpotify } from "react-icons/ai";
import { useRef } from 'react';

import useFooterAnimations from '@hooks/useFooterAnimations'

export default function Footer(){
    const logoFooter = useRef()
    const  socialIcons = useRef()
    const menuColumns = useRef()

    useFooterAnimations({logoFooter, socialIcons, menuColumns})

    return (
        <footer className={styles.footer}>
            <div ref={menuColumns} className= {styles.footer__logo_top}>
                <section className={styles.footer__logo_column}>
                    <div ref={logoFooter} className={styles.footer__logo}>
                        <Logo className={styles.footer__svg}/>
                    </div>

                    <div ref={socialIcons} className={styles.footer__redes}>
                        <FaWhatsapp className={styles.footer__icons}/>
                        <Instagram className={styles.footer__icons}/>
                        <Facebook className={styles.footer__icons}/>
                        <Linkedin className={styles.footer__icons}/>
                        <AiOutlineSpotify className={styles.footer__icons}/>
                    </div>
                </section>
                

                <section className={styles.footer__menu}>
                    <div className={styles.footer__items}>
                    <Link className={styles.footer__links} href="/">Cultura</Link>
                    <Link className={styles.footer__links} href="/products">Productos</Link>
                    <Link className={styles.footer__links} href="/work">Trabaja con nosotros</Link>
                    <Link className={styles.footer__links} href="/find">Encuentranos</Link>
                    <Link className={styles.footer__links} href="/contact">Contacto</Link>
                    <Link className={styles.footer__links} href="/policy">Política de privacidad</Link>
                    <Link className={styles.footer__links} href="/personal_data">Tratamiento datos personales</Link>
                    <Link className={styles.footer__links} href="/privacity">Aviso de privacidad</Link>
                    </div>
                </section>

                <section className={styles.footer__data}>
                    <div className={styles.footer__items}>
                        <p>Oficina Central</p>
                        <p>Ed Cortezza WeWork Av las palmas</p>
                        <p>Oficina 05102</p>
                        <p>Horario de atención: <br />Lunes a Viernes de 8:00 am a 4:30 pm</p>
                    </div>
                </section>
            </div>

            <div className= {styles.footer__logo_bottom}>
                <p>TODOS LOS DERECHOS RESERVADOS ® 2026</p>
            </div>
        </footer>
    )
}