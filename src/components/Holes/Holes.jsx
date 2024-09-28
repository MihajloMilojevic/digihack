import styles from "./Holes.module.css";
import Street from "../street/Street";

export default function Holes({holes, CAR_NUMBER, setHoles}){
    return(
        <div className={styles.mapMain}>
            <h1 className={styles.maph1}>Posmatranje Rupa</h1>
            <div className={styles.mapMainCont}>
                <div className={styles.mapLeft}>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Ukupan Broj Rupa</h2>
                        <p className={styles.mapText}>{holes.length}</p>
                    </div>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Zelenih Rupa</h2>
                        <p className={styles.mapText}>{holes.filter(({severity}) => severity === 1).length}</p>
                    </div>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Žutih Rupa</h2>
                        <p className={styles.mapText}>{holes.filter(({severity}) => severity === 2).length}</p>
                    </div>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Narandžastih Rupa</h2>
                        <p className={styles.mapText}>{holes.filter(({severity}) => severity === 3).length}</p>
                    </div>
                    <div className={styles.statsWrapper}>
                        <h2 className={styles.maph2}>Broj Crvenih Rupa</h2>
                        <p className={styles.mapText}>{holes.filter(({severity}) => severity >= 4).length}</p>
                    </div>
                </div>
                <div className={styles.mapRight}>
                    <Street holes={holes} setHoles={setHoles} CAR_NUMBER={CAR_NUMBER} />
                </div>
            </div>
        </div>
    );
}