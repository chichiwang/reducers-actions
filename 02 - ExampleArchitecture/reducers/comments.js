import Actions from '../actions/const/comments';

function nextId(state) {
  if (!state.length) return 0;
  return state[state.length - 1].id + 1;
}

function newComment(state, payload) {
  const { author, email, comment, timestamp } = payload;

  return {
    id: nextId(state),
    author,
    email,
    payload,
    timestamp,
  };
}

defaultInitialState = [];

export function comments(initialState = defaultInitialState) {
  return function(state = initialState, action) {
    switch (action.type) {

      case Actions.ADD_COMMENT:
        return [
          ...state,
          newComment(state, action.payload),
        ];
        break;

      case Actions.REMOVE_COMMENT:
        return state.filter((comment) => comment.id !== action.payload.id);
        break;

      default:
        return state;
    }
  };
};

const reducer = comments();
export default reducer;