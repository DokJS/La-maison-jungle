import React from 'react'
import { plantList } from '../data/shoppingList'; // Data
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';

const ShoppingList = (props) => {
    const { cart, setCart } = props;
    // This contains different category of plant 


    const categories = plantList.reduce((acc, current) => {
        return (
            acc.includes(current.category) ? acc
                : acc.concat(current.category)
        )
    }, [])

    const categoryList = categories.map((category, index) =>
    (
        <li key={index}>{category}</li>
    ));

    const plantNames = plantList.map(({ name, id, cover, light, water }) => (
        <PlantItem
            key={id}
            name={name}
            cover={cover}
            light={light}
            water={water}
            cart={cart}
            setCart={setCart}
        />
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