import { useNavigate } from "react-router-dom";
import CreateThreadButton from "../component/CreateThreadButton";
import ThreadList from "../component/ThreadList";
import Navbar from "../component/Navbar";

function HomePage() {

  const navigate = useNavigate();

  // This function will be called when a thread is clicked
  const handleSelect = (id: number) => {
    navigate(`/thread/${id}`);
  };

  return (
    <div>
      <Navbar/>
      <h1>This is the home page</h1>
      <ThreadList onSelect={handleSelect}/>
    </div>
  );
}
//
export default HomePage;