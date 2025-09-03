// src/components/CommentForm.tsx
import React, { useState } from "react";
import type { Comment } from "../types/types";
import { initLocalStorage } from "../utils/localStorageService";

interface CommentFormProps {
  onAdd: (commentData: Omit<Comment, "id" | "creationDate">) => void;
}

function CommentForm({ onAdd }: CommentFormProps) {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    // Example values for thread + creator
    onAdd({
      content,
      thread: 1,
    });

    initLocalStorage();
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
