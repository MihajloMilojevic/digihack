import styles from "./Sidebar.module.css";
import { IconName } from "react-icons/fa";
import { FaMapMarkerAlt, FaCertificate, FaBullhorn, FaCar, FaDeezer, FaInfo } from "react-icons/fa";
import React, { useState } from 'react';


export default function Sidebar({setTabIndex}){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${styles.sidebar} ${isHovered ? styles.hovered : ''}`}>
            <div className={styles.sidebarTop}>
                    <div className={styles.sidebarLogoMain}>
                        <img src="./LogoBlue.png" alt="" className={styles.sidebarLogo} /><div className={styles.sidebarLogoText}>RoadWatch</div>
                    </div>
                    <div onClick={() => setTabIndex(0)} className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaMapMarkerAlt /></div><div className={styles.sidebarLinkText}>Mapa</div>
                    </div>
                    <div onClick={() => setTabIndex(1)} className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaCertificate /></div><div className={styles.sidebarLinkText}>Rupe</div>
                    </div>
                    <div onClick={() => setTabIndex(2)} className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaBullhorn /></div><div className={styles.sidebarLinkText}>Obavestenja</div>
                    </div>
                    <div onClick={() => setTabIndex(3)} className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaCar /></div><div className={styles.sidebarLinkText}>Ulice</div>
                    </div>
                    <div onClick={() => setTabIndex(4)} className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaDeezer /></div><div className={styles.sidebarLinkText}>Statistika</div>
                    </div>
            </div>
            <div className={styles.sidebarBot}>
                    <div onClick={() => setTabIndex(5)} className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaInfo /></div><div className={styles.sidebarLinkText}>Informacije</div>
                    </div>
            </div>
        </div>
    );
}