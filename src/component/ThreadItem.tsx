// Import type
import type { Thread } from "../types/types";

// Define props for ThreadItem
interface ThreadItemProps {
  thread: Thread; // Single thread object
  onSelect: (id: number) => void; // Callback that takes thread id
}

// Define ThreadItem component
function ThreadItem({ thread, onSelect }: ThreadItemProps) {
  return (
   <div 
    onClick={() => onSelect(thread.id)} // When clicked, calls parent handler
   >
    <h3>{thread.title}</h3>
    <p>{thread.description}</p>
    <small>{thread.category}</small>
   </div>
  );
}

export default ThreadItem;
