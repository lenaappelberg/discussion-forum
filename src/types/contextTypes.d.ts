import type { Comment } from "./types";

export type CommentContextType = {
  comments: Comment[];
  actions: {
    addComment: (comment: Omit<Comment, 'id' | 'creationDate'>) => void;
    deleteComment: (id: number) => void;
  };
}