import { Link, useParams } from "react-router-dom";
import CommentForm from "../component/CommentForm";
import CommentList from "../component/CommentList";
import ThreadDetail from "../component/ThreadDetail";
import { useComments } from "../context/commentContext";
import { useThread } from "../context/threadContext";


function ThreadPage() {
  const { threadId } = useParams<{ threadId: string }>();
  const { Threads } = useThread();
  const { comments } = useComments();

  const thread = Threads.find(t => t.id === Number(threadId));

  if (!Threads) return (
    <div>
      <p className="text-red-500">Thread not found</p>
      <Link to="/">View all threads</Link>
    </div>
  )

  return (
    <div>
      {thread && <ThreadDetail thread={thread} />}
      <div>
        <h3>Comments</h3>
        <CommentForm />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default ThreadPage;