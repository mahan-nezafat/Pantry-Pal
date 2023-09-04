import apiKey from "./apiKeys";

export async function getFood(selectedFoodId) {
  if (!selectedFoodId) return;

  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/${selectedFoodId}/information?apiKey=${apiKey}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getYoutubeId(foodTitle, isSelected) {
  if (!isSelected) return;
  try {
    const response = await fetch(`https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}&query=${foodTitle}`);
    const data = await response.json();
    const videos = data.videos[0];
    if (typeof videos === "undefined") return;

    const youtubeId = Object.values(videos)[2];

    return youtubeId;
  } catch (error) {
    console.log(error);
  }
}
