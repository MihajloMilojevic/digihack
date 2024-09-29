import styles from "./News.module.css";

export default function News({hidden}){
    return(
        <div className={styles.mapMain} style={hidden ? {
            "visibility": "hidden",
            "height": "0px",
            "margin": "0",
            "padding": "0",
            "border": "none",
            "width": "0",
            "overflow": "hidden",
            "position": "absolute",
            "pointerEvents": "none"

        } : {}}>
            <h1 className={styles.maph1}>Obavestenja</h1>
            <div className={styles.mapMainCont}>
                
            </div>
            <div className={styles.newsMain}>
                <div className={styles.newsCont}>
                    <div className={styles.newsLeft}>
                        <div className={styles.newsTitle}>Pronadjena nova rupa!</div>
                        <div className={styles.newsText}>Sistem je detektovao novu rupu na Bulevaru Evrope. Molimo vas da obratite pažnju i sanirate je na vreme! Hvala.</div>
                    </div>
                    <div className={styles.newsRight}><div className={styles.newsRightDot}></div></div>
                </div>
                <div className={styles.newsCont}>
                    <div className={styles.newsLeft}>
                        <div className={styles.newsTitle}>Veliki broj nepravilnosti na Bulevaru cara Lazara</div>
                        <div className={styles.newsText}> Molimo vas da obratite pažnju i otklonite problem! Hvala.</div>
                    </div>
                    <div className={styles.newsRight}><div className={styles.newsRightDot}></div></div>
                </div>
                <div className={styles.newsCont}>
                    <div className={styles.newsLeft}>
                        <div className={styles.newsTitle}>Opasnost!</div>
                        <div className={styles.newsText}>Rupa na Bulevaru Patrijarha Pavla!</div>
                    </div>
                    <div className={styles.newsRight}><div className={styles.newsRightDot}></div></div>
                </div>
                <div className={styles.newsCont}>
                    <div className={styles.newsLeft}>
                        <div className={styles.newsTitle}>Obaveštenje</div>
                        <div className={styles.newsText}>Uspešno je sanirana rupa na Bulevaru Slobodana Jovanovića!</div>
                    </div>
                    <div className={styles.newsRight}><div className={styles.newsRightDotGreen}></div></div>
                </div>
                <div className={styles.newsCont}>
                    <div className={styles.newsLeft}>
                        <div className={styles.newsTitle}>Opasnost!</div>
                        <div className={styles.newsText}>Oštećenje puta na Bulevaru Evrope se povećalo!</div>
                    </div>
                    <div className={styles.newsRight}><div className={styles.newsRightDot}></div></div>
                </div>
            </div>
        </div>
    );
}