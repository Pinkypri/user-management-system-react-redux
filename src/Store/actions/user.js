export const adduser=(user)=>{
    return{
    type :"ADD_USER",
    user:user,
    }
}

export const deleteuser=(id)=>{
    return{
    type :"DELETE_USER",
    id:id,
    }
}
export const removeuser=()=>{
    return{
    type :"REMOVE_USER",
   
    }
}