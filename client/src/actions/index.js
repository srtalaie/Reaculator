export function addElement(value){
   return {
        type: 'ADD_ELEM',
        value
    }
}

export function clear(){
    return {
        type: 'CLEAR'
    }
}

export function equals(){
    return {
        type: 'EQUALS'
    }
}

