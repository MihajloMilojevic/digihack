import styles from "./Map.module.css";
import Street from "../street/Street";

export default function Map({holes, CAR_NUMBER, setHoles, reportHole, hidden}) {
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
            <h1 className={styles.maph1}>Mapa Grada</h1>
            <div className={styles.mapMainCont}>
                <div className={styles.mapLeft}>
                    
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Vozila</h2>
                        <p className={styles.mapText}>{CAR_NUMBER}</p>
                    </div>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Ukupan broj Rupa</h2>
                        <p className={styles.mapText}>{holes.length}</p>
                    </div>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Ulica pod Nadzorom</h2>
                        <p className={styles.mapText}>11</p>
                    </div>
                </div>
                <div className={styles.mapRight}>
                    <Street holes={holes} setHoles={setHoles} CAR_NUMBER={CAR_NUMBER} reportHole={reportHole} />
                </div>
            </div>
        </div>
    );
}