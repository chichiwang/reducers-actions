import NAME from './const/comments';

export default {
  addComment: (author, email, body) => {
    return {
      type: NAME.ADD_COMMENT,
      payload: {
        author,
        email,
        body,
        timestamp: new Date(),
      },
    };
  },
  
  removeComment: (id) => {
    return {
      type: NAME.REMOVE_COMMENT,
      payload: { id },
    };
  },
};