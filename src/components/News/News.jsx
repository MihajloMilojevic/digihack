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
                        <div className={styles.newsTitle}>Naslov obavestenja</div>
                        <div className={styles.newsText}>Tekst: izasla je nova rupa idi resi to odmah!</div>
                    </div>
                    <div className={styles.newsRight}><div className={styles.newsRightDot}></div></div>
                </div>
            </div>
        </div>
    );
}