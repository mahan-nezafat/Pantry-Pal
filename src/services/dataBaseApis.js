import supabase from "./supabase";

export const fetchUser = async (id) => {

   try {
    const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    // console.log(user, error)
    return {user, error}
   } catch (error) {
    console.log(error)
   }
}

export const fetchFoodIds = async (id) => {
    try {
        // if(!id) return;
    const { data, error } = await supabase
    .from('users')
    .select('favorite_foods_ids')
    .match({id})
    // console.log(id);
    // console.log(data, error)
    return {data, error}
    } catch (error) {
        console.log(error)
    }
}

export const fetchMealPlan = async (id) => {
    try {
        // if(!id) return;
    const { data: mealPlanData, error } = await supabase
    .from('users')
    .select('meal_plan')
    .match({id})
    // console.log(user);
    // console.log(mealPlanData, error)

    return {mealPlanData, error}
    } catch (error) {
        console.log(error)
    }
}

export const updateFoodIds = async (id, foodIds) => {

   try {
    const { data, error } = await supabase
    .from('users')
    .update({favorite_foods_ids: foodIds})
    .eq('id', id)
    .select()
    return {data, error}
   } catch (error) {
    console.log(error)
   }
}

export const addMealPlan = async (id, mealPlan) => {
   try {
    const { data, error } = await supabase
    .from('users')
    .update({meal_plan: mealPlan})
    .eq('id', id)
    .select()
    return {data, error}
   } catch (error) {
    console.log(error)
   }
}

export const insertUser = async (newUser) => {

   try {
    const { data, error } = await supabase
    .from('users')
    .insert([
        newUser
    ])
    .select()
    console.log(error)

    return {data, error}
   } catch (error) {
    console.log(error)
   }
}

export const updateUser = async (id, updatedUser) => {

  try {
    const { data, error } = await supabase
    .from('users')
    .update({email: updateUser.email, password: updatedUser.password})
    .eq('id', id)
    .select()
    console.log(error)
    return {data, error}
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (id) => {

   try {
    const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', id)

    return { data, error }
   } catch (error) {
    console.log(error)
   }
}

export const filterUser = async (email, password) => {
    try {
        const { data, error } = await supabase
    .from('users')
    .select('id, full_name, email, admin, favorite_foods_ids, meal_plan')
    .match({ email: email, password: password })

    console.log(error)
    return data
    } catch (error) {
        console.log(error)
    }
}