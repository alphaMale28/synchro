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

const lines = [
  "-left-[450px] -top-[200px] w-[2350px] h-[1200px] border border-white/80",
  "-left-[350px] -top-[150px] w-[2300px] h-[1800px] border border-white/20",
  "-left-[400px] -top-[110px] w-[2180px] h-[1200px] border-1 border-white/40",
  "-left-[350px] -top-[50px] w-[1050px] h-[1200px] border border-white/",
  "-left-[300px] top-0 w-[1200px] h-[1200px] border border-white/50",
  "-left-[250px] top-[50px] w-[100px] h-[1400px] border border-white/60",
  "-left-[350px] -top-[190px] w-[1900px] h-[1600px] border-2 border-white/50",
  "-right-[300px] -top-[250px] w-[2200px] h-[1200px] border-1 border-white/",
  "-right-[350px] -top-[50px] w-[1050px] h-[1200px] border border-white/",
  "-left-[300px] top-0 w-[1200px] h-[1200px] border border-white/50",
  "-left-[400px] top-[150px] w-[1900px] h-[1900px]  border-white/60",
  "-left-[350px] -top-[190px] w-[500px] h-[1800px] border-2 border-white/50",
  "-right-[300px] -top-[250px] w-[2200px] h-[1200px] border-1 border-white/",
  "-right-[550px] top-[250px] w-[2180px] h-[16000px] border border-white/50",
  "-right-[180px] top-[350px] w-[2190px] h-[18000px] border-2 border-white/50",
  "-right-[250px] top-[150px] w-[2145px] h-[1200px] border border-white/60",
  "-right-[280px] top-[120px] w-[2240px] h-[1200px] border border-white/30",
];

function App() {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#9799eb] text-[#8d8889]">
      {lines.map((line, index) => (
        <div key={index} className={`absolute rounded-full ${line} `} />
      ))}

      {isCheckingAuth ? (
        <PageLoader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <ProdectedRoute authUser={authUser}>
                <HomePage />
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
