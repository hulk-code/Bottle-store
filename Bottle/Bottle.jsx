
import './Bottle.css'
const Bottle = ({bottle ,handleCart}) => {
    
// console.log(bottle);
const {name,img,price,ratings,stock}=bottle;
    return (
        <div className='box-container'>
            <p>Bottle Name: {name}</p>
            <img className='img-Container' src={img} alt="" />
            <p>Price: {price}</p>
            <p>Rating: {ratings}</p>
            <p>Available: {stock}</p>
            <button onClick={() =>handleCart() }>Purches</button>
        </div>
    );
};

export default Bottle;