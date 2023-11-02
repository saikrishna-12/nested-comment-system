export const addComment = (id, commentMessage) => {
    return {
      type: 'ADD_COMMENT',
      payload: {
        id,
        commentMessage,
      },
    };
  };

  export const addReply = (commentMessage, parentid) => {
    return {
      type: 'ADD_REPLY',
      payload: {
        commentMessage,
        parentid
      },
    };
  };