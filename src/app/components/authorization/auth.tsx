"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import AuthSocialButton from "./auth-social-button";

import { BsGithub, BsGoogle } from "react-icons/bs";
import { toast } from "sonner";

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
        console.log(callback);
        if (callback?.ok && !callback?.error) {
          toast.success("Logged in!");
        }
      })
      .finally(() => setIsLoading(false));
  };

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
