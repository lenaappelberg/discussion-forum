import CommentForm from "../component/CommentForm";
import CommentList from "../component/CommentList";
import { useComments } from "../context/commentContext";

function ThreadPage() {

  const { comments, actions } = useComments();

  return (
    <div>
      <h1>THREAD PAGE</h1>
      <div>
        <h1>Comments</h1>
        <CommentForm onAdd={actions.addComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default ThreadPage;