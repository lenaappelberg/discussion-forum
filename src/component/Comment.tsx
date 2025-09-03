import type { Comment } from "../types/types";

interface CommentItemProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
  return (
    <li>
      <strong>{comment.creator?.userName || "Anon"}</strong>: {comment.content}
      <small style={{ marginLeft: "0.5rem" }}>
        {new Date(comment.creationDate).toLocaleString()}
      </small>
    </li>
  );
}

export default CommentItem;
