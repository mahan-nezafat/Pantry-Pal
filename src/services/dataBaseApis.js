import supabase from "./supabase";

export const fetchUser = async (id) => {

    const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    return {user, error}
}

export const insertUser = async (newUser) => {

    const { data, error } = await supabase
    .from('users')
    .insert([
        newUser
    ])
    .select()
    // console.log(data);
    return {data, error}
}

export const updateUser = async (id, updatedContent) => {

    const { data, error } = await supabase
    .from('users')
    .update(updatedContent)
    .eq('id', id)
    .select()
    console.log(data, error)
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
    .select('id, full_name, email, admin')
    .match({ email: email, password: password })

    return data
}