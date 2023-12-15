import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => (
  <div className="flex justify-center items-center h-screen">
    <SignUp redirectUrl="/sign-in" routing="path" path="/sign-up" />
  </div>
);

export default SignUpPage;
