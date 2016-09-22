// From: http://stackoverflow.com/a/35494345

/*
  It's a mistake to think of actions to state changes as one-to-one. They are in fact many-to-many. Remember that all actions are called on all reducers.
  For instance, a single action might trigger several state changes:
 */

function firstReducer(state, action) {
  switch (action.type) {
    case ACTION_X:
      // handle action x
  }
}

function secondReducer(state, action) {
  switch (action.type) {
    case ACTION_X:
      // handle action x
  }
}

function thirdReducer(state, action) {
  switch (action.type) {
    case ACTION_X:
      // handle action x
  }
}

/*
  Conversely, the same state change might result from two different actions.
 */

function firstReducer(state, action) {
  switch (action.type) {
    case ACTION_X:
    case ACTION_Y:
      // handle action x and y in the same manner
  }
}

/*
  It might seem odd to handle two actions in the same manner, but this is only in the context of a single reducer. Other reducers are free to handle them differently.
 */

function secondReducer(state, action) {
  switch (action.type) {
    case ACTION_X:
      // handle action x
    case ACTION_Y:
      // handle action y
  }
}

function thirdReducer(state, action) {
  switch (action.type) {
    case ACTION_X:
      // handle action x
    default:
      // ignore action y
  }
}

/*
  With this many-to-many relationship, it's simply unnecessary to have an action hierarchy. If you have action creators firing multiple synchronous actions, your code becomes more complex and harder to reason about.
 */
