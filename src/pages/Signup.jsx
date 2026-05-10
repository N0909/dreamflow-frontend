import { useState } from "react";
import "../styles/auth.css";
import { signupUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import PasswordInput  from '../components/PasswordInput.jsx';

function Signup() {
    
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        role: "USER"
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await signupUser(formData);

            localStorage.setItem(
                "accessToken",
                response["accessToken"]
            );

            localStorage.setItem(
                "refreshToken",
                response["refreshToken"]
            );

            toast.success("Signup successful");

            navigate("/");

        }catch (error) {

            const errorMessage =
                error.response?.data?.error ||
                error.response?.data?.message ||
                "Something went wrong";

            toast.error(errorMessage);

        }
    }

    return (
        <div className="signup-container">

            <h1>Signup</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <PasswordInput
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                />

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="USER">User</option>
                    <option value="ARTIST">Artist</option>
                </select>

                <button type="submit">
                    Signup
                </button>

            </form>

        </div>
    );
}

export default Signup;