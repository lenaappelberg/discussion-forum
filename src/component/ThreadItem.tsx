// Import type
import type { Thread } from "../types/types";
import Lockbutton from "./lockbutton";

// Define props for ThreadItem
interface ThreadItemProps {
  thread: Thread; // Single thread object
  onSelect: (id: number) => void; // Callback that takes thread id
}

// Define ThreadItem component
function ThreadItem({ thread, onSelect }: ThreadItemProps) {
  function accessthread() {
    if (thread.category === "Thread" ||"QNA") {
      onSelect(thread.id)
    }
  }
  return (
   <div> 
    <div onClick={accessthread}>
    <h3>{thread.title}</h3>
    <p>{thread.description}</p>
    <small>{thread.category}</small>
    </div>
    <Lockbutton {...thread}/>
   </div>
  );
}

export default ThreadItem;
