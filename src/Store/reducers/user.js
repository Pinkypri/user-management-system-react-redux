const initialstate={
    users:[],
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_USER":
            return{
           users:[...state.users,action.user],
            };
            case "DELETE_USER":
                const tempuser=state.users.filter((user,index)=>{
                return index!==action.id
                });
                return{
                    users:[...tempuser]
                }
            
            default:
                return state;
    }

}
export default reducer