// We are using the library: https://github.com/pauldijou/redux-act

// Redux-act follows the patterh
const increment = createAction('CONST_INC');
const decrement = createAction('CONST_DEC');

const counter = createReducer({
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
}, 0); // Initial state is the 2nd value

/*
  There is nothing wrong with this way of doing things and it handles safe-guarding the constants used quite well. There are a couple of limitations:
    1. Initial state is statically generated. Unless we wrap a function around the creator, we can not conditionalize the initial state.

    A lot of our apps define no initial state in the reducers, opting to pass that into the store. This is considered by an anti-pattern in redux:
    https://github.com/reactjs/redux/issues/1189

    2. Action creators are kept simple and stupid. There are no robust action-creators and therefore the Redux recommended method of handling async in action creators will not work.

  The problem is how we use reducers/actions and redux-act in our own application. If we create multiple reducers to combine, and conventionalize a way to pass in initial state, we come out of it with more reuseable reducers.
 */