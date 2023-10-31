import supabase from "./supabase";

export const fetchUser = async (id) => {

    const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    return {user, error}
}

export const fetchFoodIds = async (id) => {

    const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    console.log(user);
    return {user, error}
}

export const updateFoodIds = async (id, foodIds) => {

    const { data, error } = await supabase
    .from('users')
    .update({favorite_foods_ids: foodIds})
    .eq('id', id)
    .select()
    return {data, error}
}

export const insertUser = async (newUser) => {

    const { data, error } = await supabase
    .from('users')
    .insert([
        newUser
    ])
    .select()
    return {data, error}
}

export const updateUser = async (id, updatedUser) => {

    const { data, error } = await supabase
    .from('users')
    .update({email: updateUser.email, password: updatedUser.password})
    .eq('id', id)
    .select()
    return {data, error}
}

export const deleteUser = async (id) => {

    const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id)

    return { error }
}

export const filterUser = async (email, password) => {
    const { data, error } = await supabase
    .from('users')
    .select('id, full_name, email, admin, favorite_foods_ids')
    .match({ email: email, password: password })

    return data
}