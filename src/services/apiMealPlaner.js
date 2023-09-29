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