const CALC_STATE = {
    value: ''
}

const reducer = (state = CALC_STATE, action) => {
    switch(action){
        case 'ADD_ELEM':
            return{
                ...state,
                value: state.value + action.value
            }
        case 'CLEAR':
            return{
                ...state,
                value: ''
            }
        case 'EQUALS':
            return{
                ...state,
                value: eval(state.value)
            }
        default:
            return state;
    }
}

export default reducer;