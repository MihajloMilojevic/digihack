import styles from "./index.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Map from "../components/Sidebar/Map";
import Holes from "../components/Sidebar/Holes";
import News from "../components/Sidebar/News";
import Streets from "../components/Sidebar/Streets";
import Stats from "../components/Sidebar/Stats";
import { useState } from "react";


const components = [Map, Holes, News, Streets, Stats]

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