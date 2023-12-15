import Logo from "../Logo";
import { UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  return (
    <div className="flex h-14 px-5 py-2 text-white justify-between items-center bg-[#281549]">
      <Logo />
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default NavBar;
