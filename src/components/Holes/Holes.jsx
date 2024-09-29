import styles from "./Holes.module.css";
import HolesMap from "../street/Holes";

export default function Holes({holes, reportHole, reportedHoles, CAR_NUMBER, setHoles, fixHole, hidden}){
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
            <h1 className={styles.maph1}>Posmatranje Rupa</h1>
            <div className={styles.mapMainCont}>
                <div className={styles.mapLeft}>
                    <div className={styles.mapLeftLeft}>
                        <div className={styles.statsWrapper}>
                            <h2 className={styles.maph2}>Ukupan Broj Rupa</h2>
                            <p className={styles.mapText}>{reportedHoles.length}</p>
                        </div>
                        <div className={styles.statsWrapper}>
                            <h2 className={styles.maph2}>Broj Zelenih Rupa</h2>
                            <p className={styles.mapText}>{reportedHoles.filter(({severity}) => severity === 1).length}</p>
                        </div>
                        <div className={styles.statsWrapper}>
                            <h2 className={styles.maph2}>Broj Žutih Rupa</h2>
                            <p className={styles.mapText}>{reportedHoles.filter(({severity}) => severity === 2).length}</p>
                        </div>
                    </div>
                    <div className={styles.mapLeftRight}>
                        <div className={styles.statsWrapper}>
                            <h2 className={styles.maph2}>Broj Narandžastih Rupa</h2>
                            <p className={styles.mapText}>{reportedHoles.filter(({severity}) => severity === 3).length}</p>
                        </div>
                        <div className={styles.statsWrapper}>
                            <h2 className={styles.maph2}>Broj Crvenih Rupa</h2>
                            <p className={styles.mapText}>{reportedHoles.filter(({severity}) => severity >= 4).length}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.mapRight}>
                    <HolesMap reportedHoles={reportedHoles} fixHole={fixHole} />
                </div>
            </div>
        </div>
    );
}