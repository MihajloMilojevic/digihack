import { useState } from "react";

export default function Street() {
    const [left, setLeft] = useState(100);
    const [top, setTop] = useState(100);
  return (
    <div>
        <div style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/ns.png)`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
    }}>
    </div>
    <div style={{
        position: "absolute",
        top,
        left,
        width: "20px",
        height: "20px",
        color: "red",
        zIndex: 1000,
    }}></div>
    </div>
  )
}