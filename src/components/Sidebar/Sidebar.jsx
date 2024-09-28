import styles from "./Sidebar.module.css";
import { IconName } from "react-icons/fa";
import { FaMapMarkerAlt, FaCertificate, FaBullhorn, FaCar, FaDeezer, FaInfo } from "react-icons/fa";
import React, { useState } from 'react';



export default function Sidebar(){
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
                <a>
                    <div className={styles.sidebarLogoMain}>
                        <img src="./LogoBlue.png" alt="" className={styles.sidebarLogo} /><div className={styles.sidebarLogoText}>RoadWatch</div>
                    </div>
                </a>
                <a>
                    <div className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaMapMarkerAlt /></div><div className={styles.sidebarLinkText}>Mapa</div>
                    </div>
                </a>
                <a>
                    <div className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaCertificate /></div><div className={styles.sidebarLinkText}>Rupe</div>
                    </div>
                </a>
                <a>
                    <div className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaBullhorn /></div><div className={styles.sidebarLinkText}>Obavestenja</div>
                    </div>
                </a>
                <a>
                    <div className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaCar /></div><div className={styles.sidebarLinkText}>Ulice</div>
                    </div>
                </a>
                <a>
                    <div className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaDeezer /></div><div className={styles.sidebarLinkText}>Statistika</div>
                    </div>
                </a>
            </div>
            <div className={styles.sidebarBot}>
                <a>
                    <div className={styles.sidebarLink}>
                        <div className={styles.sidebarLinkLogo}><FaInfo /></div><div className={styles.sidebarLinkText}>Informacije</div>
                    </div>
                </a>
            </div>
        </div>
    );
}