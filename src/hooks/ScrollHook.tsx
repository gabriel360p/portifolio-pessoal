import { useEffect, useState } from "react";

export function ScrollHook(){
    const [scrollPosition,setScrollPosition]=useState<number>(0);
    useEffect(()=>{

        function hanldeScrollPosition(){
            setScrollPosition(window.scrollY)
        }

        window.addEventListener('scroll',hanldeScrollPosition)
        return()=>{
        window.removeEventListener('scroll',hanldeScrollPosition)
        }

    },[])
    return scrollPosition;
}