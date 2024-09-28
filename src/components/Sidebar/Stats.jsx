import styles from "./Streets.module.css";
import Street from "../../street/Street"

export default function Stats(){
    return(
        <div className={styles.mapMain}>
            <h1 className={styles.maph1}>Mapa Grada</h1>
            <div className={styles.mapMainCont}>
                <div className={styles.mapLeft}>
                    <div className={styles.maph2}>Broj Aktivnih Vozila</div>
                    <div className={styles.mapText}>23</div>
                    <div className={styles.maph2}>Broj Aktivnih Kamera</div>
                    <div className={styles.mapText}>23</div>
                    <div className={styles.maph2}>Broj Neispravnih vozila</div>
                    <div className={styles.mapText}>7</div>
                </div>
                <div className={styles.mapRight}>
                    <Street />
                </div>
            </div>
        </div>
    );
}