// Import navigation hook
import { useNavigate } from "react-router-dom";
// Import components
import CreateThreadButton from "../component/CreateThreadButton";
import ThreadList from "../component/ThreadList";

// Define HomePage component
function HomePage() {
  // Get navigate function
  const navigate = useNavigate();

   // Function called when a thread is clicked in ThreadList
  const handleSelect = (id: number) => {
    // Navigate to thread detail page with the clicked thread's id
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