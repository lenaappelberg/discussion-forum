// Import
import type { Comment } from "../types/types";

// Define props for CommentItem
interface CommentItemProps {
  comment: Comment; // Single comment
}

// Define CommentItem component
function CommentItem({ comment }: CommentItemProps) {
  return (
    <li>
      {/* Show creator's username or anon if none is provided */}
      <strong>{comment.creator?.userName || "Anon"}</strong>: {comment.content}
      <small style={{ marginLeft: "0.5rem" }}>
        {new Date(comment.creationDate).toLocaleString()}
      </small>
    </li>
  );
}

export default CommentItem;
