import type { Thread } from "../types/types";


interface ThreadDetailProps {
  thread: Thread;
}

function ThreadDetail({ thread }: ThreadDetailProps) {
  return (
    <>
      <h2>THREAD DETAIL</h2>
      <p>${thread.title}</p>
      <p>${thread.description}</p>
      <p>${thread.category}</p>
    </>
  );
}

export default ThreadDetail;
