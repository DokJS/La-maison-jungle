import React from 'react';
import '../styles/Cart.css';

const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const potPrice = 15;
  return (
    <div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monsteraPrice} $</li>
            <li>Lierre : {lierrePrice} $</li>
            <li>Bouqet : {potPrice} $</li>
        </ul>
        <span>Total : {monsteraPrice+lierrePrice+potPrice}$</span>
    </div>
  )
}

export default Cart