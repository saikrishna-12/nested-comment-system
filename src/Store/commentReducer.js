const initialState = {
    comments: [],
    child:[],
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