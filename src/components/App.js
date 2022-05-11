import React,{useState} from 'react';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Footer from './Footer';

const App = () => {
  const title = "la maison jungle"
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className='lmj-logo' />
        <h1 className='lmj-title'>
          {title.toUpperCase()}
        </h1>
      </Banner>
      
      <div style={{display:'flex'}}>
      <Cart
      cart={cart}
      setCart={setCart}
       />
      <ShoppingList
      cart={cart}
      setCart={setCart} 
      />
      </div>
      <Footer/>
    </div>
  )
}

export default App;