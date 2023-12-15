import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/landing-page/Home";
import { ClerkProvider } from "@clerk/clerk-react";
import Dashboard from "./components/dashboard/Dashboard";
import SignInPage from "./components/sign-in/SignInPage";
import SignUpPage from "./components/sign-up/SignUpPage";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ClerkProvider>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
};

export default App;
