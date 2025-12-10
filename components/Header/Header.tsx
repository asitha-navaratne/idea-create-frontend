import Image from "next/image";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import logo from "@/public/images/logo.png";

import Button from "../Button";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="relative h-6 w-42">
        <Image src={logo} sizes="300px" fill alt="IdeaCreate Logo" />
      </div>
      <div className="flex gap-4 [&>*:nth-child(2)]:hidden sm:[&>*:nth-child(2)]:block">
        <div className="absolute bottom-5 left-5 md:static flex items-center space-x-4 mr-4">
          <Switch id="dark-mode" />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
        <Button variant="secondary">Sign up</Button>
        <Button>Log in</Button>
      </div>
    </header>
  );
};

export default Header;
