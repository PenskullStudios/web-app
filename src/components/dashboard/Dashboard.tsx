import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";
import { useAuth } from "@clerk/clerk-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      console.log("Not signed in");
      return navigate("/sign-in");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      <NavBar />
      <div className="text-center mt-10">Dashboard</div>
    </div>
  );
};

export default Dashboard;
