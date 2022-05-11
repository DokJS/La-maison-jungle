import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { cart, setCart } = props;


  return (
    isOpen ? (<div className='lmj-cart'>
      <button onClick={() => setIsOpen(false)} className="lmj-cart-toggle-button">Fermer</button>
      <h2>Panier</h2>
      <ul>

      </ul>
      <span>Total : {cart} $</span>
      <button onClick={() => setCart(0)}>Vider le panier</button>
    </div>)
      : (
        <div className="lmj-cart-closed">
          <button onClick={() => setIsOpen(true)} className="lmj-cart-toggle-button">Ouvrir le panier</button>
        </div>
      )
  )


}

export default Cart