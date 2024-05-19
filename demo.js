const redux = require('redux');


// It can done using action.type == 'Increment' using if,if else  also but i prefer Switch case
const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            };
        case 'decrement':
            return {
                counter: state.counter - 1
            };
        case 'INCREMENTBY2':
            return {
                counter: state.counter + 2
            };
        case 'DECREMENTBY2':
            return {
                counter: state.counter - 2
            };
        default:
            return state;
    }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const currentState = store.getState();
    console.log(currentState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'INCREMENTBY2' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'DECREMENTBY2' });
