import "./Login.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Enviando os dados: ${username} - ${password}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign In to Your Account</h1>
        <div className="input email">
          <label>Email</label>
          <input
            type="email"
            placeholder="Your email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input password">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"} // Altera entre text e password
            placeholder="Your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={togglePasswordVisibility} className="icon">
            {showPassword ? <BsEyeSlash /> : <BsEye />} {/* Alterna o ícone */}
          </span>
        </div>
        <div className="recall-forget">
          <div>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <button>Sign In</button>
        <div className="signup-link">
          <p>
            Don’t have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
