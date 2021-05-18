import {useEffect, useState} from 'react'

const getWindowDimensions = ()=>{
    const {innerWidth:width,innerHeight:height} = window;
    return {width,height}
}
export default function useWindowDimensions() {
    const [windowDimensions,setWindowDimension] = useState(getWindowDimensions())
    const handleWindowResize = ()=>{
        setWindowDimension(getWindowDimensions())
    }
    useEffect(()=>{
        window.addEventListener('resize',handleWindowResize);
        return ()=> window.removeEventListener('resize',handleWindowResize);
    },[])
    return windowDimensions
}