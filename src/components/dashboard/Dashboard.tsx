import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import NavBar from "./NavBar";
import Histogram from "./Histogram";

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
      <div className="w-full flex flex-col justify-center items-center gap-10 mt-10">
        <div className="text-center">Dashboard</div>
        <div className="h-96 w-96">
          <Histogram />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
