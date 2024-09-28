import styles from "./index.module.css";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Map from "../components/Map/Map";
import Holes from "../components/Holes/Holes";
import News from "../components/News/News";
import Streets from "../components/Streets/Streets";
import Stats from "../components/Stats/Stats";
import Info from "../components/Info/Info";


const components = [Map, Holes, News, Streets, Stats, Info]


export default function Admin(){
    const [holes, setHoles] = useState([])
    const [CAR_NUMBER, setCAR_NUMBER] = useState(20)

    useEffect(() => { 
        const interval = setInterval(() => {
            setCAR_NUMBER(CAR_NUMBER => Math.min(CAR_NUMBER + 1, 45))
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    
    const [tabIndex, setTabIndex] = useState(0)
    let Component = components[tabIndex]

    return(
        <>
            <Sidebar setTabIndex={setTabIndex} />
            <div className={styles.main}>
                <Component holes={holes} setHoles={setHoles} CAR_NUMBER={CAR_NUMBER}/>
            </div>
        </>
    );
}