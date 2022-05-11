import React from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css';

const PlantItem = (props) => {
    const { name, cover, light, water,cart,setCart } = props;
    const addItem = (nom, prix, quantity) => {
        const index = cart.findIndex(item => item.name === nom);
        if (index !== -1) {
            // This copy cart for directly modify quantity
            const newCart = [...cart];
            // This increments the quantity by one
            newCart[index].quantity += 1;
            // This updates cart
            setCart(() => newCart);
        } else {
            // add the current item directly in cart
            setCart(cart => cart.concat({ name: nom, price: prix, quantity: quantity }))
        }
    }

    return (
        <li className='lmj-plant-item'>
            <img src={cover} alt="Monstera" className='lmj-plant-item-cover' />
            {name.toUpperCase()}
            <CareScale scaleType='water' scaleValue={water} />
            <CareScale scaleType='light' scaleValue={light} />
            <button onClick={()=>addItem(name,price,1)}>Ajouter au panier</button>
        </li>
    )
}

export default PlantItem;