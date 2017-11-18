const init = {
    name:'starter',
    value:0,
};

const Counter = (state = init, action) => {
    switch (action.type) {
        case "COUNT": {
            const quantity = action.payload.quantity
            return {...state, value: state.value + quantity};
        }
    }
    return state;
};

export default Counter;
