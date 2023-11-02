
import { useSelector } from 'react-redux';
import CommentsList from './CommentsList';

function Viewcomments() {
  const comments = useSelector((state) => state.comment.comments);
  

  return (
    <div>
      <h2 style={{ paddingLeft: '38px' }}>Comments:</h2>
      <CommentsList comments={comments} />
    </div>
  );
}

export default Viewcomments;
