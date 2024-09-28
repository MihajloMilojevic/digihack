import styles from "./index.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Map from "../components/Sidebar/Map";
import { useEffect, useState } from "react";

function Noop() {
    return <h1>Noop</h1>
}


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