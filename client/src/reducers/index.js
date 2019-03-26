const CALC_STATE = {
    value: 0
}

const reducer = (state = CALC_STATE, action) => {
    switch(action.type){
        case 'ADD_ELEM':
            return{
                ...state,
                value: state.value + action.num
            }
        case 'CLEAR':
            return{
                ...state,
                value: ''
            }
        case 'EQUALS':
            return{
                ...state,
                value: eval(state.num)
            }
        default:
            return state;
    }
}

export default reducer;