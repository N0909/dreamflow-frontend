import { useState } from "react";
import "../styles/auth.css";
import { loginUser } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import PasswordInput from "../components/PasswordInput";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState("password");

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await loginUser(formData);

      localStorage.setItem("accessToken", response["accessToken"]);

      localStorage.setItem("refreshToken", response["refreshToken"]);

      toast.success("Login successfull");

      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Something went wrong";

      toast.error(errorMessage);
    }
  }

  return (
    <div className="signup-container">
      <h1> Login </h1>
      <form onSubmit={handleSubmit}>
        
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={formData.email}
        />

        <PasswordInput
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}
