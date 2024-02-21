"use client";

import { useState } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { setNavigation } from "@/actions/getCookies";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const Toggle = ({
  navigation,
}: {
  navigation: RequestCookie | undefined;
}) => {
  const [toggle, setToggle] = useState(navigation?.value);
  return (
    <div className="flex items-center space-x-3">
      <Label htmlFor="pagination">Infinite-Scroll</Label>
      <Switch
        id="pagination"
        checked={toggle === "1" ? true : false}
        onCheckedChange={() => {
          setNavigation(toggle === "1" ? "0" : "1");
          setToggle(toggle === "1" ? "0" : "1");
          toast.success(
            `${
              toggle === "0"
                ? "Navigation change to pagination"
                : "Navigation change to infinite scroll"
            } `
          );
        }}
      />
      <Label htmlFor="pagination">Pagination</Label>
    </div>
  );
};
