import Actions from '../actions/const/counter';

defaultInitialState = {
  id: undefined,
  value: 0,
};

export function counter(initialState = defaultInitialState) {
  return function(state = initialState, action) {
    switch (action.type) {

      case Actions.INCREMENT_COUNTER:
        return ++state;
        break;

      case Actions.DECREMENT_COUNTER:
        return --state;
        break;
        
      default:
        return state;
    }
  };
};

const reducer = counter();
export default reducer;