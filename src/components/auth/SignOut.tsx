import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <Button onClick={handleSignOut} className="w-full group" variant="outline">
      Sign out{" "}
      <LogOut
        width={14}
        height={14}
        className="ml-1 group-hover:animate-pulse"
      />
    </Button>
  );
};

export default SignOut;
