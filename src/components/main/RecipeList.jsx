import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = () => {

    const list = [
        {
            foodName: 'Pasta',
            ingredients: ['pasta', 'cheese', 'milk', 'mushrooms']
        },
        {
            foodName: 'Peperoni Pizza',
            ingredients: ['floar', 'cheese', 'tommato', 'peperoni']
        },
        {
            foodName: 'Rice and chicken',
            ingredients: ['rice', 'chicken', 'seasoning', 'oil']
        },
        {
            foodName: 'Scrambled Egg',
            ingredients: ['egg', 'milk', 'butter']
        },
        {
            foodName: 'Cheese Burger',
            ingredients: ['buns', 'cheese', 'minced meat', 'onion', 'tommato', 'pickels']
        }
    ]

    return ( 
        <>
            <div className="recipe-list">
                {
                    list.map((item, index) => {
                        return <RecipeItem item={item} />
                    })
                }
            </div>
        </>
    );
}
 
export default RecipeList;