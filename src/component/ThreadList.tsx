import { useThread } from "../context/threadContext";
import ThreadItem from "./ThreadItem";

interface ThreadListProps {
  onSelect: (id: number) => void;
}

function ThreadList({ onSelect }: ThreadListProps) {
  const { Threads } = useThread();

   if (Threads.length === 0) {
    return <p className="text-gray-500">No threads yet</p>;
  }

  return (
     <div >
      {Threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          thread={thread}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default ThreadList;