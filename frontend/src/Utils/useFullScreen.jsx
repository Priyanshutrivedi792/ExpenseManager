import React, { useEffect, useState } from 'react'

export const userWindowSize= () => {
    const [size, setSize] = useState([0,0])
    useEffect(()=>{
        const updatesize = () =>{
            setSize([window.innerWidth,window.innerHeight])
        }
        window.addEventListener('resize',updatesize)

        return() => window.removeEventListener('resize', updatesize)
    },[])
    return {
        width:size[0],
        height:size[1]
    }
}


