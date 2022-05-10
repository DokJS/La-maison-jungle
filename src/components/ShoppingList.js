import React from 'react'
import { plantList } from '../data/shoppingList'; // Data
import '../styles/ShoppingList.css';

const mainStyle = {
    display: 'flex',
    flexDirection:'column',
    alignItems:'center'
}

const ShoppingList = () => {
        // This contains different category of plant 
    const categories = plantList.reduce((acc, current) => {
        return (
            acc.includes(current.category) ? acc
                : acc.concat(current.category)
        )
    }, [])

    const categoryList = categories.map( (category,index) =>
        (
            <li key={index}>{category}</li>
        ));

    const plantNames = plantList.map( ({name,id,isSpecialOffer})=>(
        <li key={id} className='lmj-plant-item'>
            {name}
            {isSpecialOffer && (<div className='lmj-sales'>{'soldes'.toUpperCase()}</div>)}
            </li>
    ));
   

  return (
    <div>
        <ul>
        {categoryList}
        </ul>
        <ul className='lmj-plant-list'>
        {plantNames}
        </ul>
    </div>
  )
}

export default ShoppingList