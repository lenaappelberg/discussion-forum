import CreateThreadPage from "../component/CreateThreadPage";
import ThreadList from "../component/ThreadList";

function HomePage() {
  return (
    <div>
      <h1>This is the home page</h1>
      <CreateThreadPage/>
      <ThreadList threads={[]} />
    </div>
  );
}

export default HomePage;