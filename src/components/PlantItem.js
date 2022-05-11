import React from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css';
const INITIALQUANTITY = 1;

const PlantItem = (props) => {
    const { name, cover, light, water, cart, setCart, price } = props;
    // verify if cart already contains current plant
    // if contains, increment quantity
    // else add current into cart
    const addItem = (nom,prix,quantity)=> {
        const index = cart.findIndex( element => element.name === nom);
        if(index !== -1){
            const cartCopy = [...cart];
            cartCopy[index].quantity += 1;
            setCart(cartCopy);
        }else{
            setCart( cart => cart.concat({name:nom,price:prix,quantity}));
        }
    }

    return (
        <li className='lmj-plant-item'>
            <img src={cover} alt="Monstera" className='lmj-plant-item-cover' />
            {name.toUpperCase()}
            <CareScale scaleType='water' scaleValue={water} />
            <CareScale scaleType='light' scaleValue={light} />
            <button onClick={() => addItem(name, price, INITIALQUANTITY)}>Ajouter au panier</button>
        </li>
    )
}

export default PlantItem;