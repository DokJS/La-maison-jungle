import React from 'react'

const CareScale = (props) => {
    const {scaleType,scaleValue} = props;
    const range = [1,2,3];

    const symbol = scaleType === 'light' ? '☀️' : '💧';
    const iconsArr = range.map( value => {
        return(
            scaleValue > value && (symbol)
        )
    })
  return (
    <div>
        <span>{iconsArr}</span>
    </div>
  )
}

export default CareScale