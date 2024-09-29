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
    const [reportedHoles, setReportedHoles] = useState([])
    const [CAR_NUMBER, setCAR_NUMBER] = useState(20)

    function reportHole(hole) {
        setReportedHoles(reportedHoles => [...reportedHoles.filter(h => !(h.x === hole.x && h.y === hole.y)), hole])
    }

    function fixHole(hole) {
        setHoles(holes => {
            console.log(holes.length, holes.filter(h => !(h.x === hole.x && h.y === hole.y)).length)
            return holes.filter(h => !(h.x === hole.x && h.y === hole.y))});
        setReportedHoles(reportedHoles => reportedHoles.filter(h => !(h.x === hole.x && h.y === hole.y)));
    }

    useEffect(() => { 
        const interval = setInterval(() => {
            setCAR_NUMBER(CAR_NUMBER => Math.min(CAR_NUMBER + 1, 45))
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    
    const [tabIndex, setTabIndex] = useState(0)
    let Component = components[tabIndex]
    const props = {reportedHoles, reportHole, holes, CAR_NUMBER, setHoles, fixHole}
    return(
        <>
            <Sidebar setTabIndex={setTabIndex} />
            <div className={styles.main}>
                {components.map((C, i) => <C key={i} {...props} hidden={tabIndex !== i} />)}
            </div>
        </>
    );
}