import { Routes, Route, Navigate } from "react-router";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import PageLoader from "./components/PageLoader";
import HomePage from "./pages/HomePage";

const ProdectedRoute = ({ children, authUser }) => {
  return authUser ? children : <Navigate to={"/login"} />;
};

const PublicRoute = ({ children, authUser }) => {
  return !authUser ? children : <Navigate to={"/"} />;
};

function App() {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  // if (isCheckingAuth) return <PageLoader />;
  return (
    <div className="min-h-screen bg-slate-900 text-white relative flex items-center justify-center p-4 overflow-hidden ">
      {/* GRID BG & GLOW SHAPES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#272757_1px,transparent_1px),linear-gradient(to_bottom,#272757_1px,transparent_1px)] bg-size-[14px_24px] opacity-20" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#8686AC] opacity-20 blur-[120px]" />
      <div className="absolute bottom-0 -right-32 h-[30rem] w-[30rem] rounded-full bg-[#505081] opacity-30 blur-[140px]" />

      {isCheckingAuth ? (
        <PageLoader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <ProdectedRoute authUser={authUser}>
                <HomePage />
                {/* <ChatPage /> */}
              </ProdectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute authUser={authUser}>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute authUser={authUser}>
                <SignUpPage />
              </PublicRoute>
            }
          />
        </Routes>
      )}
      <Toaster />
    </div>
  );
}

export default App;
