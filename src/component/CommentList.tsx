// Imports
import type { Comment } from "../types/types";
import CommentItem from "./Comment";

// Define props for CommentList
interface CommentListProps {
  comments: Comment[];
}

// Define CommentList component
function CommentList({ comments }: CommentListProps) {
  // If there are no comments display message
  if (comments.length === 0) return <p>Be the first to comment!</p>;

  return (
    <div>
      {/* Render CommentItem for each comment in Comment array */}
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
