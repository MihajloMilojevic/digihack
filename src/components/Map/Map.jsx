import styles from "./Map.module.css";
import Street from "../street/Street";

export default function Map({holes, CAR_NUMBER, setHoles}) {
    return(
        <div className={styles.mapMain}>
            <h1 className={styles.maph1}>Mapa Grada</h1>
            <div className={styles.mapMainCont}>
                <div className={styles.mapLeft}>
                    
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Aktivnih Kamera</h2>
                        <p className={styles.mapText}>{CAR_NUMBER}</p>
                    </div>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Rupa</h2>
                        <p className={styles.mapText}>{holes.length}</p>
                    </div>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Ulica pod Nadzorom</h2>
                        <p className={styles.mapText}>11</p>
                    </div>
                </div>
                <div className={styles.mapRight}>
                    <Street holes={holes} setHoles={setHoles} CAR_NUMBER={CAR_NUMBER} />
                </div>
            </div>
        </div>
    );
}