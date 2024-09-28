import styles from "./index.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Map from "../components/Sidebar/Map";
import { useState } from "react";

function Noop() {
    return <h1>Noop</h1>
}


const components = [Map, Noop, Noop]

export default function Admin(){

    const [tabIndex, setTabIndex] = useState(0)
    let Component = components[tabIndex]
    
    return(
        <>
            <Sidebar setTabIndex={setTabIndex} />
            <div className={styles.main}>
                <Component />
            </div>
        </>
    );
}