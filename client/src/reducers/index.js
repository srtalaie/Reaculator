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
            break;
        case 'CLEAR':
            return{
                ...state,
                value: 0
            }
            break;
        case 'EQUALS':
            return{
                ...state,
                value: eval(state.value)
            }
            break;
        default:
            return state;
    }
}

export default reducer;