import { useEffect, useState } from "react";


export default function useViewport() {
    const [isMobile, setIsMobile] = useState(false)
    const [viewportWidth, setViewportWidth] = useState(0)
    useEffect(() => {
        const vw = window.innerWidth;
        setViewportWidth(vw);
        setIsMobile(viewportWidth < 512);
    }, [viewportWidth])
    return { isMobile, viewportWidth };
}