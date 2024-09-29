import styles from "./Info.module.css";

export default function Info({hidden}){
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
            <h1 className={styles.maph1}>Informacije</h1>
            <div className={styles.mapMainCont}>
                <div className={styles.mapLeft}>
                    <h1>Tim TPRG</h1>
                    <ul>
                        <li>Mihajlo Milojević</li>
                        <li>Nikola Milanović</li>
                        <li>Petar Popović</li>
                        <li>Luka Prlinčević</li>
                    </ul>
                    <p>Fakultet tehničkih nauka, Novi Sad</p>
                    <p>Softversko inženjerstvo i informacione tehnologije</p>
                </div>
                <div className={styles.mapRight}>
                    
                </div>
            </div>
        </div>
    );
}