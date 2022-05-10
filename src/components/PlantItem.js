import React from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css';

const PlantItem = (props) => {
    const { name, cover, light, water } = props;
   

    return (
        <li className='lmj-plant-item'>
            <img src={cover} alt="Monstera" className='lmj-plant-item-cover' />
            {name.toUpperCase()}
            <CareScale scaleType='water' scaleValue={water} />
            <CareScale scaleType='light' scaleValue={light} />
        </li>
    )
}

export default PlantItem;