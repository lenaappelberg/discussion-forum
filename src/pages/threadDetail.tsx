import CommentForm from "../component/CommentForm";
import CommentList from "../component/CommentList";
import { useComments } from "../context/commentContext";


function ThreadPage() {

  const { comments } = useComments();

  return (
    <div>
      <h1>THREAD PAGE</h1>
      <div>
        <h1>Comments</h1>
        <CommentForm />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default ThreadPage;