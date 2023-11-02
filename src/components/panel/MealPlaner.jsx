import React, { useEffect, useState } from "react";
import Button from "../utils/Button";
import { addMealPlanItem, generateMealPlan, getMealPlanWeek, getOneMealTemplate } from "../../services/apiMealPlaner";
import { fetchUser } from "../../services/dataBaseApis";
import { useSelector } from "react-redux";
import TableColumn from "./TableColumn";

const MealPlaner = () => {
    const { id } = useSelector(store => store.auth);
    const [templateId, setTemplateId] = useState('');
    const [mealPlan, setMealPlan] = useState({});
    const days = ["Saturday","Sunday","Monday","Tuesday","Wendsday","Thursday","Friday"]
    const [isClicked, setIsClicked] = useState(false)
    async function handleMealPlan(e) {
        e.preventDefault()
        const {user, error} = await fetchUser(id);
        const {hash, spoonacular_username} = user[0];
    }
    
    useEffect(() => {
        if(!isClicked) return
        async function handleGenerate() {
            const data = await generateMealPlan("week", 4000)
            setMealPlan({...data})
            console.log(Object.values(Object.values(mealPlan)[0]))
        }

        handleGenerate();
        console.log(mealPlan)
        setIsClicked(false)
    }, [isClicked])

   

    return (
       <div className="flex flex-col w-full h-[800px] justify-start items-center">
            <div className="flex w-[90%] h-[85%] border-2 border-black border-solid">
                {typeof Object.values(mealPlan)[0] === "undefined" ?
                ""
                :
                   Object.values(Object.values(mealPlan)[0]).map((mealDay, index) => {
                        
                       return <TableColumn key={index} mealDay={mealDay} day={days[index]} />
                    })
                

            
            
                }
                

                
            </div>
            <div className="flex w-[90%] mt-3 ">
                <Button handleClick={() => setIsClicked(true)} type="default">Generate a meal plan</Button>

            </div>
       </div>
    );
}

export default MealPlaner