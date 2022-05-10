import React from 'react';
import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

const CareScale = (props) => {
    const {scaleType,scaleValue} = props;
    const range = [1,2,3];

    const symbol = scaleType === 'light' ? <img src={sun} alt="soleil" /> : <img src={water} alt="water" />;
    const iconsArr = range.map( value => {
        return(
            scaleValue >= value && (symbol)
        )
    })

    const handleClick = (type,value)=> {
      const intensity = value === 1 ? 'peu'
      : value === 2 ? 'modérement'
      : value === 3 && 'beaucoup';
      const ressource = type === 'water'? "d'eau":
      'de soleil';
        alert(`Cette plante a besoin de ${intensity} ${ressource} !`);
    }

  return (
    <div onClick={()=>handleClick(scaleType,scaleValue)}>
        <span>{iconsArr}</span>
    </div>
  )
}

export default CareScale