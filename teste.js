const redux = require('redux')

//const initState = 0
function counterReducer(state=0, action) {
    switch(action.type){
        case 'INC': 
            return state + action.value
        case 'DEC': 
            return state - action.value
    }
    return state
}

function storeAlterado(){
    console.log(store.getState())
}

const store = redux.createStore(counterReducer)

store.subscribe(storeAlterado)

const increment = {type: 'INC', value: 10}
const decrement = {type: 'DEC', value: 5}

store.dispatch(increment)
store.dispatch(decrement)