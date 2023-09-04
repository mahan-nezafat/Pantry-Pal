import apiKey from "./apiKeys";

export async function fetchData(searchQuery, isSubmit) {
  if (!isSubmit) return;

  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&number=100`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}
