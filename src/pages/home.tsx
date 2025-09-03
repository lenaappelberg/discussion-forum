import { useNavigate } from "react-router-dom";
import CreateThreadButton from "../component/CreateThreadButton";
import ThreadList from "../component/ThreadList";

function HomePage() {

  const navigate = useNavigate();

  // This function will be called when a thread is clicked
  const handleSelect = (id: number) => {
    navigate(`/thread/${id}`);
  };

  return (
    <div>
      <h1>This is the home page</h1>
      <CreateThreadButton/>
      <ThreadList onSelect={handleSelect}/>
    </div>
  );
}
//
export default HomePage;