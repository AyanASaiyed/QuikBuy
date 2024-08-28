import { Link } from "react-router-dom";

function RegisterButton() {
  return (
    <Link to="/shop">
      <button type="button" className="regbtn">
        Register
      </button>
    </Link>
  );
}

export default RegisterButton;

