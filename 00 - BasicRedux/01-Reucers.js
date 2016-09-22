// Basic Reducer
// Checks against all actions - returns new state
// Reducer name refelcts key of store it is scoped to
// Handles all relevant actions
function entries(state = [], action ) {
  switch (action.type) {
    case ADD_ENTRIES:
      return [...state, ...action.entries];
    case REMOVE_ENTRIES:
      const removeIds = action.entries.map(entry => entry.id);
      return state.filter(entry => removeIds.indexOf(entry.id) < 0);
    default:
      return state;
  }
}

// Combining reducers
function profile(state = {}, action) {
  switch(action.type) {
    case UPDATE_EMAIL:
      return { ...state, { email: action.email } };
    case UPDATE_FIRST_NAME:
      return { ...state, { firstName: action.firstName } };
    case UPDATE_LAST_NAME:
      return { ...state, { lastName: action.lastName } };
    default:
      return state;
  }
}

function payments(state = {}, action) {
  switch(action.type) {
    case ADD_CREDIT_CARD:
      return { ...state, { creditCards: [...state.creditCards, action.creditCard] } };
    case REMOVE_CREDIT_CARD:
      return state.creditCards.filter(card => card.id !== action.cardId);
    default:
      return state;
  }
}

const account = combineReducers({
  profile,
  payments,
});

// Accounts store will look like:
// {
//  profile: { ... },
//  payments: { ... },
// }
// with each reducer operating on a small part of the whole store