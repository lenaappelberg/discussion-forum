// Imports
import React, { useState } from "react";
import { useComments } from "../context/commentContext";


// Define the CommentForm component
function CommentForm() {
  // Destructure actions from context
  const { actions } = useComments();
  // Local state for input field 
  const [content, setContent] = useState("");

  /// /
  // Handle form submission
  /// /
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If content is empty or just spaces do nothing
    if (!content.trim()) return;

    // Call addComment with required fields (in this case hardcoded example)
    actions.addComment({
      content,
      thread: 1,
    });

    // Reset input field to empty after submit
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default CommentForm;
