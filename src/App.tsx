// Import React and React router hooks and components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
// Import Page components
import CreateThreadPage from './component/CreateThreadPage'
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import ThreadPage from "./pages/threadDetail";
// Import styling
import "./App.css";
// Import conext
import { CommentProvider } from "./context/commentContext";
// Import localStorage logic
import { initLocalStorage } from './utils/localStorageService';
import Register from "./component/register";


function App() {
  // Seed localStorage when React mounts
  useEffect(() => {
    initLocalStorage(); 
  }, []);
  
  return (
    <CommentProvider>
      <Router>
        <Routes>

          {/* -- HomePage -- */}
          <Route path="/" element={<HomePage />} />

          {/* -- LoginPage -- */}
          <Route path="/login" element={<LoginPage />} />

          {/*   -- ThreadPage --  */}
          <Route path="/thread/:threadId" element={<ThreadPage />} /> 

          {/*--CreateThreadPage--*/  }
          <Route path="/createthread" element={<CreateThreadPage/>} />
          {/*--Register--*/}
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </Router>
    </CommentProvider>
  );
}

export default App;
