// Import
import type { Comment } from "../types/types";
// Import user icon
import userIcon from "../assets/user-circle-svgrepo-com (1).svg"

// Define props for CommentItem
interface CommentItemProps {
  comment: Comment; // Single comment
}

// Define CommentItem component
function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="background-gray-200 comment-container">
      <div className="flex user-info background-secondary">
        <img src={comment.creator?.picture || userIcon} alt="user profile picture" className="user-image"/>
        {/* Show creator's username or anon if none is provided */}
        <strong>{comment.creator?.userName || "Anon"}</strong>
      </div>
         {comment.content}

      <small style={{ marginLeft: "0.5rem" }}>
        {new Date(comment.creationDate).toLocaleString()}
      </small>
    </div>
  );
}

export default CommentItem;
