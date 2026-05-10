import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import '../styles/auth.css';

export default function PasswordInput({ name, value, onChange, placeholder }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="password-container">
      <input
        type={showPass ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <button
        type="button"
        className="eye-btn"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
