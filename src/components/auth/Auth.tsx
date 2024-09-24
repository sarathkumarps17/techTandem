import React from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Label } from "../ui/label";
import Image from "next/image";
import GoogleIcon from "@/assets/google.svg";
const Auth = () => {
  return (
    <div className="mt-2 p-2 flex flex-col space-y-2 items-center">
      <Label className="text-bold text-sm mb-1">Sign in with</Label>
      <Button variant="outline" className="w-full">
        <GitHubLogoIcon className="mx-2" /> GitHub
      </Button>
      <Button
        color="primary"
        className="w-full hover:bg-foreground hover:text-background"
      >
        <Image
          src={GoogleIcon}
          alt="Google Icon"
          className="mx-2"
          width={16}
          height={16}
        />
        Google
      </Button>
    </div>
  );
};

export default Auth;
