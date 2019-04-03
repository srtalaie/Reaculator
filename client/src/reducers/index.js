const CALC_STATE = {
    value: ''
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
                // eslint-disable-next-line no-eval
                value: eval(state.value)
            }
        default:
            return state;
    }
}

export default reducer;