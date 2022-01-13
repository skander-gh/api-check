import React from 'react'
import Cardd from './Carduser'
import  { useEffect, useState } from 'react'
import axios from 'axios'
function Listt() {
    const [listOfUSer,setListOfUSers]=useState([])
    useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>setListOfUSers(res.data))
     .catch(err=>err)
        
    }, [])
  
   
    return (<>
        <h1>Liste Of Users</h1>
        <div className='container'>
            
            {             listOfUSer.map((el,i)=><Cardd el={el} key={el.id} /> )}

        </div>
        </>
    )
}


export default Listt
