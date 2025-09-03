import type { Thread } from "../types/types";
import ThreadItem from "./ThreadItem";


interface ThreadDetailProps {
  threads: Thread[];
}

function ThreadList({ threads }: ThreadDetailProps) {
  return (
    <ul>
      {threads.map((thread) => (
        <ThreadItem key={thread.id} thread={thread} />
      ))}
    </ul>
  );
}

export default ThreadList;