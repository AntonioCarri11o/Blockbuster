export const AuthReducer=(state={},action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...action.payload,
                logged:true,
            };
        case "LOGOUT":
            return{
                logged:false,
            };
            default:
                return state;    
    }
}