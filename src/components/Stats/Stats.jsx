import styles from "./Stats.module.css";

export default function Stats({hidden}){
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
            <h1 className={styles.maph1}>Statistika</h1>
            <div className={styles.mapMainCont}>
                    In development...
            </div>
        </div>
    );
}