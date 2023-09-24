import supabase from "./supabase";

export const fetchUsers = async () => {

    const { data: users, error } = await supabase
    .from('users')
    .select('*')

    return {users, error}
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
    .update({ full_name: updatedUser.full_name })
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