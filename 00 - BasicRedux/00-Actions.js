// Basic Action Creator
// Returns the appropriate type along with params
// Note: Multile arguments and multiple params allowed in the final payload
function exampleActionCreator(...params) {
  return {
    type: 'EXAMPLE_ACTION',
    payload: params,
  };
}

// Basic Action Creator with Side Effects (synchronous)
function exampleSideEffects(param1, param2) {
  return {
    type: 'ACTION_WITH_SIDE_EFFECTS',
    payload: { param1, param2 },
    timestamp: Date.now(),
    value_from_localstorage: window.localStorage.getItem('some-storage-data'),
  };
}

// Advanced - Async composite Action Creators
// As prescribed in http://redux.js.org/docs/advanced/AsyncActions.html
// Caveat: uses redux-thunk so the store knows how to deal with actions that return promises
function requestData(endpoint) {
  return {
    type: 'REQUEST_DATA',
    endpoint,
  };
}

function receiveData(endpoint, data) {
  return {
    type: 'RECEIVE_DATA',
    endpoint,
    data,
  };
}

function fetchData(endpoint) {
  return dispatch => {
    dispatch(requestData(endpoint));
    return fetch(`http://my.server.com/api/${endpoint}`)
      .then(response => response.json)
      .then(json => dispatch(receiveData(endpoint, json.data)));
  };
}

// EX: fetchData('blogposts')(store.dispatch)

/* Notes:
 *
 * Actions should be named after their intent,
 * not named after their effects (we do pretty good at this)
 *
 * Redux-Thunk example is not necessary with Loop in place
 * Though how clean the delegation/control flow looks with Loop is debatable
 * 
 */