import React from "react";
import Button from "../utils/Button";
import { generateMealPlan, getMealPlanWeek } from "../../services/apiMealPlaner";
import { fetchUser } from "../../services/dataBaseApis";
import { useSelector } from "react-redux";

const MealPlaner = () => {
    const { id } = useSelector(store => store.auth);
  async function handleMealPlan() {
        const {user, error} = await fetchUser(id)
        const {hash, spoonacular_username} = user[0]
        getMealPlanWeek(hash, spoonacular_username)
        generateMealPlan()
    }

    return (
        <Button type="default" handleClick={handleMealPlan} >fetch data</Button>
    );
}

export default MealPlaner