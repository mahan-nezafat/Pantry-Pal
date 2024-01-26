import React from "react";
import MealItem from "./MealItem";

const TableColumn = ({ day, mealDay }) => {
    const {calories, carbohydrates, fat, protein} = mealDay.nutrients
    console.log(day)
    return (
        <>
            { mealDay &&
                <div className={`flex flex-col w-[14.3%] ${ day === "Friday" ? "" : "border-r-2 border-amber-900"}`}>
                    <div className="flex justify-center text-amber-900 dark:text-amber-400 items-center border-b-2 border-solid border-red-500 w-full h-[10%]">
                        <h1>{day}</h1>
                    </div>
                    {mealDay && Object.values(mealDay.meals).map((mealItem, index) => {
                        return <MealItem mealItem={mealItem} key={mealItem.id} />
                        })
                        
                    }
                    <div className="flex flex-col text-sm p-2 text-amber-900 dark:text-amber-400">
                        <span>Cals: {Math.floor(calories)}</span>
                        <span>Carbs: {Math.floor(carbohydrates)}</span>
                        <span>fat: {Math.floor(fat)}</span>
                        <span>protein: {Math.floor(protein)}</span>
                    </div>
                </div>
            }
        </>
    );
}

export default TableColumn; 