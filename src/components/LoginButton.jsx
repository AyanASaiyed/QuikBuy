import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/shop">
      <button type="button" className="loginbtn">
        Login
      </button>
    </Link>
  );
}

export default LoginButton;
