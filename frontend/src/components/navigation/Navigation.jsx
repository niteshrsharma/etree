import logo from '../../assets/logo.png';
import styles from './Navigation.module.css';
import { IoIosArrowDropdownCircle, IoIosContact } from 'react-icons/io'
import { GiNotebook, GiHamburgerMenu } from "react-icons/gi";
import { HiCommandLine } from "react-icons/hi2";
import { RxCross1 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
export default function Navigation() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1236);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const navElement = <div className={styles.options}>
        <div>Services <IoIosArrowDropdownCircle color='white' size={20} /></div>
        <div>Learning platform <GiNotebook color='white' size={20} /></div>
        <div>Online Console / Editor <HiCommandLine color='white' size={20} /></div>
        <div>Contact <IoIosContact color='white' size={20} /></div>

        <button>Login</button>
    </div>
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logoCont}>
                <img src={logo} alt="logo" className={styles.logo} />
                 E-TREE
                </div>
                {isMobile ? (isMenuOpen ? <RxCross1 color="white" onClick={toggleMenu} size={25} style={{ marginRight: "20px" }} /> : <GiHamburgerMenu color='white' onClick={toggleMenu} size={30} style={{ marginRight: "20px" }} />) :
                    navElement
                }
                {
                    (isMenuOpen && isMobile) && navElement
                }

            </nav >
        </>
    )
}