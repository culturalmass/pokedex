"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AuthSocialButton from "./auth-social-button";

import { BsGithub, BsGoogle } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Logged in!");
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      // console.log("isAuthenticated", session);
    } else {
      // console.log("isNotAuthenticated", session);
    }
  }, [session?.status]);

  return (
    <>
      <div className="flex gap-2">
        <AuthSocialButton
          icon={BsGithub}
          onClick={() => socialAction("github")}
        />
        <AuthSocialButton
          icon={BsGoogle}
          onClick={() => socialAction("google")}
        />
      </div>
    </>
  );
};

export default Auth;
