// Import type
import type { Thread } from "../types/types";

// Define props for ThreadDetail
interface ThreadDetailProps {
  thread: Thread;
}

// Define ThreadDetail component
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
