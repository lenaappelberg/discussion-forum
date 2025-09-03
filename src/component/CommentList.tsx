import type { Comment } from "../types/types";
import CommentItem from "./Comment";

interface CommentListProps {
  comments: Comment[];
}

function CommentList({ comments }: CommentListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default CommentList;
