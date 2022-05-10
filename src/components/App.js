import React from 'react';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'

const App = () => {
  const title = "la maison jungle"

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className='lmj-logo' />
        <h1 className='lmj-title'>
          {title.toUpperCase()}
        </h1>
      </Banner>
      <Cart />
      <ShoppingList />
    </div>
  )
}

export default App;