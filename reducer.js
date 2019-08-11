 reducer=(state,action)=>{
    switch(action.type){
        case "+1":
            return {count: state.count+1}
        default: 
            return state;
        }
}
export default reducer