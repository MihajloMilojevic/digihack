import styles from "./index.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Map from "../components/Sidebar/Map";
import Holes from "../components/Sidebar/Holes";
import News from "../components/Sidebar/News";
import Streets from "../components/Sidebar/Streets";
import Stats from "../components/Sidebar/Stats";
import { useEffect, useState } from "react";


const components = [Map, Holes, News, Streets, Stats]

const components = [Map, Noop, Noop]


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