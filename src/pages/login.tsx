import { Link } from "react-router-dom";
import Loginforum from "../component/loginforum";
import { useUser } from "../context/usercontext";

function LoginPage() {
  useUser()
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <Loginforum/>
      <Link to="/Register">Register</Link>
    </div>
  );
}

export default LoginPage;