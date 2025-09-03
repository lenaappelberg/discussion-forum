import type { Thread } from "../types/types";


interface ThreadItemProps {
  thread: Thread;
  onSelect: (id: number) => void;
}

function ThreadItem({ thread, onSelect }: ThreadItemProps) {
  return (
   <div 
    onClick={() => onSelect(thread.id)} 
    style={{ 
      background: "#5e5e5e",
      padding: "1rem",
      margin: "3rem"  
    }}>
    <h3>{thread.title}</h3>
    <p>{thread.description}</p>
    <small>{thread.category}</small>
   </div>
  );
}

export default ThreadItem;
