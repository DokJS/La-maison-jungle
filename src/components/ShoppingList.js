import React, {useState} from 'react';
import { plantList } from '../data/shoppingList'; // Data
import PlantItem from './PlantItem';
import Categories from './Categories';
import '../styles/ShoppingList.css';

const ShoppingList = (props) => {
    const [category, setCategory] = useState('')
    const { cart, setCart } = props;
    
    // This let to filter article displayed en relation of category selected
    const filterOrNo = category === ''? (plantList)
    : (plantList.filter(plant => plant.category === category));

    const plantNames = filterOrNo.map(({ name, id, cover, light, water,price }) => (
        <PlantItem
            key={id}
            name={name}
            cover={cover}
            light={light}
            water={water}
            price={price}
            cart={cart}
            setCart={setCart}
        />
    ));


    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Categories
            category={category}
            setCategory={setCategory}/>
            <ul className='lmj-plant-list'>
                {plantNames}
            </ul>
        </div>
    )
}

export default ShoppingList