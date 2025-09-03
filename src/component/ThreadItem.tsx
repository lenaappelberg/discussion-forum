import type { Thread } from "../types/types";


interface ThreadItemProps {
  thread: Thread;
  onSelect: (id: number) => void;
}

function ThreadItem({ thread, onSelect }: ThreadItemProps) {
  return (
   <div onClick={() => onSelect(thread.id)}>
    <h3>{thread.title}</h3>
    <p className="text-sm text-gray-600 truncate w-64">{thread.description}</p>
   </div>
  );
}

export default ThreadItem;
