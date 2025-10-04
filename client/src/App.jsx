import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import DashBoard from "./pages/DashBoard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "@/components/ui/sonner";
import Project from "./pages/Project";
import Invites from "./pages/Invites";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AuthProvider>
          <Toaster position="top-right" richColors />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<DashBoard />}></Route>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/invites"
              element={
                <ProtectedRoute>
                  <Invites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/:projectId"
              element={
                <ProtectedRoute>
                  <Project />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
