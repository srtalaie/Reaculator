export function addElement(num){
   return {
        type: 'ADD_ELEM',
        num
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

