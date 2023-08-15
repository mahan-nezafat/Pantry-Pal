import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ results }) => {

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
    console.log(typeof results)

    return ( 
        <>
            <div className="recipe-list">
                { typeof results !== "undefined" ?
                    Object.values(results).map((item, index) => {
                        return <RecipeItem item={item} key={item.id} />
                    })
                    :
                    ""
                }
            </div>
        </>
    );
}
 
export default RecipeList;