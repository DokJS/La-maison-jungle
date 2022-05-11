import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';

const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { cart, setCart } = props;
  // total cart
  let total = 0;
  cart.length > 0 && (total = cart.reduce((acc, current) => {
    return (acc += current.price * current.quantity)
  }, 0))

  // title
  useEffect(() => {
    document.title = `LMJ: ${total} à payer`
  }, [total])

  // This save currentCart inner localStorage
  useEffect(()=>{
    if(cart.length !== 0){
      localStorage.setItem('cart',JSON.stringify(cart));
    }
  },[cart]);

  // This retrieve prevCart from localStorage
  useEffect(()=>{
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    setCart(savedCart);
  },[])

  let articles = null;
  // articles display
  // This let to map only if cart is'nt empty
  cart.length > 0 && (articles = cart.map(({ name, price, quantity }, index) => {
    return (<div key={index} style={{ fontWeight: 'bold', marginBottom: '5px' }}>
      {`${name.toUpperCase()}         x${quantity}        ${quantity * price}$`}
    </div>)
  }))

  const resetCart = ()=>{
    setCart([]);
    localStorage.clear() // reset localStorage
  }

  return (
    isOpen ? (<div className='lmj-cart'>
      <button onClick={() => setIsOpen(false)} className="lmj-cart-toggle-button">Fermer</button>
      <h2>Panier</h2>
      <ul style={{ paddingLeft: '0px' }}>
        {articles}
      </ul>
      <span>Total :{total} $</span>
      <button onClick={resetCart}>Vider le panier</button>
    </div>)
      : (
        <div className="lmj-cart-closed">
          <button onClick={()=>setIsOpen(true)} className="lmj-cart-toggle-button">Ouvrir le panier</button>
        </div>
      )
  )


}

export default React.memo(Cart);