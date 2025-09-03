import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import ThreadPage from "./pages/threadDetail";
import { CommentProvider } from "./context/commentContext";
import { useEffect } from "react";
import { initLocalStorage } from './utils/initLocalStorage';


function App() {
  // Seed localStorage when React mountss
  useEffect(() => {
    initLocalStorage(); 
  }, []);
  
  return (
    <CommentProvider>
      <Router>
        <Routes>

          {/* -- HomePage -- */}
          <Route path="ß/" element={<HomePage />} />

          {/* -- LoginPage -- */}
          <Route path="/login" element={<LoginPage />} />

          {/*   -- ThreadPage --  */}
          <Route path="/thread" element={<ThreadPage />} /> 

        </Routes>
      </Router>
    </CommentProvider>
  );
}

export default App;
