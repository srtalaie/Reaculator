const CALC_STATE = {
    value: 0
}

const reducer = (state = CALC_STATE, action) => {
    switch(action){
        case 'ADD_ELEM':
            return{
                ...state,
                value: state.value + action.text
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