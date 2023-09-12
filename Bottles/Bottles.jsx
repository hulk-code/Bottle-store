import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles , setBottles]=useState([])
    const [cart , setCart]= useState([])

    useEffect( () => {
        fetch('Bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    const handleCart=battle =>{
        const NewAddeded=[...cart , battle]
        setCart(NewAddeded)
    }

    return (
   <div>
    <h2>
        total Bottle:{bottles.length}
        new item add:{cart.length}
        <ul>
            
        </ul>
    </h2>
       <div className="grid-container">
       {
        bottles.map(bottle => <Bottle  key="Bottle.id " bottle={bottle}
        handleCart={handleCart}></Bottle>)
       }
       </div>
  
   </div>


        
    );
};

export default Bottles;