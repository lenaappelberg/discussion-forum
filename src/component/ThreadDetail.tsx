/* import { useThread } from "../context/threadContext"; */
import type { Thread } from "../types/types";


interface ThreadDetailProps {
  thread: Thread;
}

function ThreadDetail({ thread }: ThreadDetailProps) {

  return (
      <div>
        <p>{thread.category}</p>
        <h1>{thread.title}</h1>
        <p>{thread.description}</p>
      </div>
  );
}

export default ThreadDetail;
