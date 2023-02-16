import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import { setDefaultEventParameters } from 'firebase/analytics'
import React, { useEffect, useState } from 'react'

function Pythn() {
    const[name,setname]=useState("India")
    const[datas,setdata]=useState([])
    const[tag,settag]=useState([]);

    useEffect(()=>{
    })

    const Call = () => {
        fetch("/test",{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:name}).then(
            res=>res.json()
        ).then(
            data => {
                console.log(data)
                setdata(data)
            }
        )
    }
    const Call1 = () => {
        fetch("/tst",{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:name})
        .then(
            res=>res.json()
        ).then(
            data => {
                console.log(data)
                settag(data)
                
            }
        )
    }
  return (
    
    <div>
        <button onClick={Call}>CALL</button>
        <button onClick={Call1}>CALL1</button>
        <h1>QA</h1>
        {datas.map((d)=>{
            return(
 <ul>
        <li className='q1'>{d[0]}</li>
        <li className='a1'>{d[1]}</li>
        </ul> 
            )
    })}
    <h1>QA</h1>
        {tag.map((d)=>{
            return(
 <ul>
        <p>{d}</p>
        </ul> 
            )
    })}

    </div>
  )
}

export default Pythn