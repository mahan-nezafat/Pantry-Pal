import React, { useEffect, useState } from "react";
import Button from "../utils/Button";
import { addMealPlanItem, generateMealPlan, getMealPlanWeek, getOneMealTemplate } from "../../services/apiMealPlaner";
import { addMealPlan, fetchUser } from "../../services/dataBaseApis";
import { useDispatch, useSelector } from "react-redux";
import TableColumn from "./TableColumn";
import { setMealPlan } from "../../features/auth/authSlice";

const MealPlaner = () => {
    const { id, isLoggedIn, mealPlan } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const days = ["Saturday","Sunday","Monday","Tuesday","Wendsday","Thursday","Friday"]
    const [isClicked, setIsClicked] = useState(false)
    const [calories, setCalories] = useState(0);
    async function handleMealPlan(e) {
        e.preventDefault()
        const {user, error} = await fetchUser(id);
        const {hash, spoonacular_username} = user[0];
    }
    


    useEffect(() => {
        if(!isClicked) return
        async function handleGenerate() {
            const data = await generateMealPlan("week", calories)
            dispatch(setMealPlan(data));
            console.log(Object.values(Object.values(mealPlan)[0]))
        }

        handleGenerate();
        console.log(mealPlan)
        setIsClicked(false)
        // console.log(Object.values(mealPlan).length)
    }, [isClicked])


    function handleAddMealPlan() {
        addMealPlan(id, mealPlan)
    }
   

    return (
       <div className="flex flex-col w-full h-[800px] justify-start items-center">
            <div className="flex w-[90%] h-[85%] border-[1px] border-black border-solid rounded">
                { mealPlan !== null ?
                
                Object.values(mealPlan.week).map((mealDay, index) => {
                       console.log(mealPlan)
                        
                       return <TableColumn key={index} mealDay={mealDay} day={days[index]} />
                    })
                :
                ""
                }
                
            </div>
            <div className="flex w-[90%] mt-3 ">
                <Button handleClick={handleAddMealPlan} type="default" >Add this meal plan</Button>
                <Button handleClick={() => setIsClicked(true)} type="default">Generate a meal plan</Button>
                <input placeholder="number of calories for each day" className="placeholder:text-base ml-2 outline-none border-[1px] border-black p-1 px-3 w-[18%] rounded" type="number" value={calories} onChange={(e) => e.target.value >= 0 ? setCalories(e.target.value) : ""} />
            </div>
       </div>
    );
}

export default MealPlaner