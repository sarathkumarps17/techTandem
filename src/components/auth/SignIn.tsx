"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Label } from "../ui/label";
import Image from "next/image";
import GoogleIcon from "@/assets/google.svg";
import { signIn } from "next-auth/react";
import { UseAuthStore } from "../Providers/StoreProvider";

const SignIn = () => {
  const { setError, clearError } = UseAuthStore((state) => state);

  useEffect(() => {
    // Clear any existing errors when the component mounts
    clearError();
  }, [clearError]);

  const handleSignIn = async (provider: string) => {
    try {
      const result = await signIn(provider, { redirect: false });
      if (result?.error) {
        setError(result.error);
      } else {
        clearError();
      }
    } catch (error) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="mt-2 p-2 flex flex-col space-y-2 items-center">
      <Label className="text-bold text-sm mb-1">Sign in with</Label>
      <Button
        onClick={() => handleSignIn("github")}
        variant="outline"
        className="w-full active:bg-background/60"
      >
        <GitHubLogoIcon className="mx-2" /> GitHub
      </Button>
      <Button
        onClick={() => handleSignIn("google")}
        color="primary"
        className="w-full hover:bg-red-300 hover:text-background active:bg-primary"
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

export default SignIn;
