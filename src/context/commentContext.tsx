// Import types
import type { Comment } from "../types/types";
import type { CommentContextType } from "../types/contextTypes";
// Import React hooks and types
import { createContext, useContext, useState, type ReactNode } from "react";

// Create new context for comments
const CommentContext = createContext<CommentContextType | undefined>(undefined);

// Define key from localStorage for comments
const LOCAL_STORAGE_KEY = '@comments';

// Define props type for the provider
interface CommentProviderProps {
  children: ReactNode;
}

export const CommentProvider: React.FC<CommentProviderProps> = ({ children }) => {
  // Store list of comments, loads comments on first render
  const [comments, setComments] = useState<Comment[]>(() => {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored? JSON.parse(stored) : [];
  });

  /// /
  // Function to generate unique number id
  /// /
  const generateId = (): number => {
    let id: number;
    // Loop until an unique id is found
    do {
      id = Math.floor(Math.random() * 1_000_000);
    } while (comments.some(c => c.id === id)); // check for duplicates
    return id; // return unique id
  };

  /// /
  // Add comment
  /// /
  const addComment = (commentData: Omit<Comment, 'id' | 'creationDate'>) => {
    // Create new comment object
    const newComment: Comment = {
      id: generateId(),
      creationDate: new Date(),
      ...commentData,
    };
    // Update state
    setComments(prev => [newComment, ...prev]);
  };

  /// /
  // Delete comment
  /// /
  const deleteComment = (id: number) => {
    // Filter out commment with matching id
    setComments(prev => prev.filter(comment => comment.id !== id));
  };

  // Group actions
  const actions = {
    addComment,
    deleteComment
  }

  // Provide comments array and grouped actions to all child components
  return (
    <CommentContext.Provider value={{ comments, actions}}>
      {children}
    </CommentContext.Provider>
  );
};

// Custom hook to access the comment context safely
export const useComments = (): CommentContextType => {
  const context = useContext(CommentContext);
  if (!context) {
    // If hook is used outside provider, throw error
    throw new Error('useComments must be used within a CommentProvider');
  }
  return context;
};

