 import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="center">
        <h1>CHATBOT</h1>
        <h2>TALK WITH ENCRYPTION AND AI</h2>
        <h3>
          
        </h3>
        <Link to="/signup">Get Started</Link>
      </div>
      <div className="terms">
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
