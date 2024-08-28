import "./init.jsx";
import Title from "../components/Title.jsx";
import Cart from "/shopping-cart.png";
import Bags from "/shopping-bags.png";
import LoginButton from "../components/LoginButton.jsx";
import RegisterButton from "../components/RegisterButton.jsx";
// import Amplify from "aws-amplify";
// import awsExports from "../aws-exports.js";

// Amplify.configure(awsExports);

function App() {
  return (
    <section>
      <Title />
      <img className="cart" src={Cart}></img>
      <img className="bags" src={Bags}></img>
      <LoginButton />
      <RegisterButton />
    </section>
  );
}

export default App;
