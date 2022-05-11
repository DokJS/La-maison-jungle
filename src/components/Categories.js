import React from 'react'
import { plantList } from '../data/shoppingList';

const Categories = (props) => {
    const {category,setCategory}= props;
    // for list different categories
    const categories = plantList.reduce((acc, current) => {
        return (
            !acc.includes(current.category) ? acc.concat(current.category)
                : acc
        )
    }, [])
    // for add '' option
    categories.push('');
  
    const categoriesOptionList = categories.map( category => {
        return(
            <option key={category} value={category}>{category}</option>
        )
    })

    // This change the category value to '' only if current category is different to ''
    const resetSelection = ()=> {
        category !== '' && (setCategory(''));
    }
    return (
        <div>
            <label htmlFor="categories">Category : </label>
            <select id='categories' onChange={(e)=>setCategory(e.target.value)} value={category}>
            {categoriesOptionList}
            </select>
            <button onClick={resetSelection}>Réinitialiser</button>
        </div>
    )
}

export default Categories;