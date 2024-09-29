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
                <div className={styles.mapLeft}>
                    In development...
                </div>
                <div className={styles.mapRight}>
                    
                </div>
            </div>
        </div>
    );
}