import CreateThreadButton from "../component/CreateThreadButton";
import ThreadList from "../component/ThreadList";

function HomePage() {
  return (
    <div>
      <h1>This is the home page</h1>
      <CreateThreadButton/>
      <ThreadList threads={[]} />
    </div>
  );
}
//
export default HomePage;