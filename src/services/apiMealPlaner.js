import apiKey from "./apiKeys"

export const connectUser = async (newUser) => {
    const response = await fetch(`https://api.spoonacular.com/users/connect?apiKey=${apiKey}`,{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const data = await response.json();

    // console.log(data);
    return data
}

export const getMealPlanWeek = async (hash, username) => {
    let day = new Date().getDay() + 1;
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    const startDate = `${year}-${month}-${day}`
    const response = await fetch(`https://api.spoonacular.com/mealplanner/${username}/week/${startDate}?apiKey=${apiKey}&hash=${hash}`)
    const data = await response.json();  
    console.log(data)
}

export const generateMealPlan = async () => {
    const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=week&targetCalories=3000`)
    const data = await response.json();  
    console.log(data)
    
}