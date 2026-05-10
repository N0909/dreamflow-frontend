import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home.jsx';

function Home() {
  return <HomePage />;
}

function Login() {
  return <h1>Login Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;