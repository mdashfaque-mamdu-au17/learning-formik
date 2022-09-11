import logo from "./logo.svg";
import "./App.css";
import SignupForm from "./components/SignupForm";
import SignupForm2 from "./components/SignupForm2";
import SignupForm3 from "./components/Reusable";
function App() {
  return (
    <div>
      {/* <SignupForm /> */}
      {/* <SignupForm2 /> */}
      <SignupForm3 />
    </div>
  );
}

export default App;
