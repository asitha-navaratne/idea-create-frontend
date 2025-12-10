import Image from "next/image";

import logo from "@/public/images/logo.png";

import DarkModeToggle from "../DarkModeToggle";
import Button from "../Button";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="relative h-6 w-42">
        <Image src={logo} sizes="300px" fill alt="IdeaCreate Logo" />
      </div>
      <div className="flex gap-4 [&>*:nth-child(2)]:hidden sm:[&>*:nth-child(2)]:block">
        <DarkModeToggle />
        <Button variant="secondary">Sign up</Button>
        <Button>Log in</Button>
      </div>
    </header>
  );
};

export default Header;
