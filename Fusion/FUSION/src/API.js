import React, { useEffect, useState } from 'react'



function API() {
    const [state,setstate] = useState([])
    
    useEffect(()=>{

        fetch("https://api.api-ninjas.com/v1/facts?limit=50", {
            method: 'GET',
            mode: 'cors',
            headers: {
              'X-Api-Key': 'Qf/Rfl3d6KX7icXByDoMpA==UDTHPR4k16BZygdk'
            },
         // body data type must match "Content-Type" header
        })
        .then((data) =>data.json().then((data)=>data.map((st)=>setstate(st))));

    },[])
    

    function sup(){
        const rand = Math.floor(Math.random() * 50);
        return state[rand]
    }
    return (
    <div><div class="card-body">
    <blockquote class="blockquote mb-0">
    <p>{state.fact}</p>
      {/* <p>A well-known quote, contained in a blockquote element.</p> */}
    </blockquote>
  </div>
    </div>
  )
}

export default API