// CommentsList.js

import React from 'react';
import Box from '@mui/material/Box';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
    
  
    
    return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {comments.map((item) => (
        <Box
          sx={{
            width: '100%',
            maxWidth: '850px',
            display: 'grid',
            wordWrap: 'break-word',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px,))',
            gap: 2,
          }}
          key={item.id}
        >
          <Comment item={item}  />
        </Box>
      ))}
    </div>
  );
};

export default CommentsList;
