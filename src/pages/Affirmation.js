import './Affirmation.css'
import { useEffect, useState } from "react";
import axios from 'axios'

function Affirmation() {
    
const [data, setData] = useState([])

useEffect(()=> {
    axios.get('https://avyrie.github.io/affirmations-api/affirmations.json')
    .then(res=>setData(res.data.affirmations[Math.floor(Math.random()*35)]))  /*uses Math.random to select a random index from 0 to 34*/
    .catch(err=>console.log(err))
    },[])


    return (  
        <div id='affirm-div'>
          <p>{data}</p>
          <a href='/'><button className='close-button'>close</button></a> 
          
        </div>
    );
}

export default Affirmation;