import { Routes, Route } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden ">
      {/* GRID BG & GLOW SHAPES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#272757_1px,transparent_1px),linear-gradient(to_bottom,#272757_1px,transparent_1px)] bg-size-[14px_24px] opacity-20" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#8686AC] opacity-20 blur-[120px]" />
      <div className="absolute bottom-0 -right-32 h-[30 rem] w-[30 rem] rounded-full bg-[#505081] opacity-30 blur-[140px]" />

      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
