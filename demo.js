const redux = require('redux');

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

// Increase the counter by a value of 5
for (let i = 0; i < 5; i++) {
    store.dispatch({ type: 'increment' });
}

// Decrement the counter
store.dispatch({ type: 'decrement' });
