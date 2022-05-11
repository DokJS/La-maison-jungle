import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { cart, setCart } = props;

  let articles = null;
  // This let to map only if cart is'nt empty
  cart.length > 0 && ( articles = cart.map(({ name, price, quantity }, index) => {
    return (<div key={index} style={{fontWeight:'bold',marginBottom:'5px'}}>
      {`${name.toUpperCase()}         x${quantity}        ${quantity * price}$`}
    </div>)
  }))
  return (
    isOpen ? (<div className='lmj-cart'>
      <button onClick={() => setIsOpen(false)} className="lmj-cart-toggle-button">Fermer</button>
      <h2>Panier</h2>
      <ul style={{paddingLeft:'0px'}}>
        {articles}
      </ul>
      <span>Total : $</span>
      <button onClick={() => setCart([])}>Vider le panier</button>
    </div>)
      : (
        <div className="lmj-cart-closed">
          <button onClick={() => setIsOpen(true)} className="lmj-cart-toggle-button">Ouvrir le panier</button>
        </div>
      )
  )


}

export default Cart