import type { Thread } from "../types/types";


interface ThreadDetailProps {
  thread: Thread;
}

function ThreadItem({ thread }: ThreadDetailProps) {
  return (
    <>
      <h2>THREAD DETAIL</h2>
      <p>{thread.title}</p>
    </>
  );
}

export default ThreadItem;
