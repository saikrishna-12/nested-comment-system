const initialState = {
    comments: [
        { id: 1, commentMessage: 'Dummy Comment 1' },
        { id: 2, commentMessage: 'Dummy Comment 2' },
        { id: 3, commentMessage: 'Dummy Comment 3' },
        { id: 4, commentMessage: 'Dummy Comment 4' },
        { id: 5, commentMessage: 'Dummy Comment 5' },
        { id: 6, commentMessage: 'Dummy Comment 6' },
        { id: 7, commentMessage: 'Dummy Comment 7' },
        { id: 8, commentMessage: 'Dummy Comment 8' },
        { id: 9, commentMessage: 'Dummy Comment 9' },
        { id: 10, commentMessage: 'Dummy Comment 10' },
      ],
      child: [
        { id: 20, commentMessage: 'Dummy Reply 1', parent: 1 },
        { id: 21, commentMessage: 'Dummy Reply 2', parent: 2 },
        
      ],
  };
  
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_COMMENT':
        return {
          ...state,
          comments: [
            ...state.comments,
            {
              id: action.payload.id,
              commentMessage: action.payload.commentMessage,
              
            },
          ],
        };
        case 'ADD_REPLY':
      
        
                return{
                    ...state,
                    child:[
                        ...state.child,
                        {
                            id: Date.now(),
                            commentMessage: action.payload.commentMessage,
                            
                            parent: action.payload.parentid,
                        }
                    ]
      }
      default:
        return state;
    }
  };
  
  export default commentReducer;