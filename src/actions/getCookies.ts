"use server";

import { cookies } from "next/headers";

export const setSticker = async (sticker: string) => {
  cookies().set({
    name: "sticker",
    value: sticker,
    httpOnly: true,
    path: "/",
  });
};

export const setNavigation = async (navigation: string) => {
  cookies().set({
    name: "navigation",
    value: navigation,
    httpOnly: true,
    path: "/",
  });
};

export const setFavorites = async (favorites: string) => {
  let currentFavArray: string[] = [];
  let newFavArray = [];
  if (!!cookies().get("favorites")) {
    let getFav = cookies().get("favorites");
    currentFavArray = JSON.parse(getFav?.value!);
  }
  if (currentFavArray?.includes(favorites)) {
    newFavArray = currentFavArray.filter((favId) => favId !== favorites);
  } else {
    newFavArray = [...currentFavArray, favorites];
  }

  cookies().set({
    name: "favorites",
    value: JSON.stringify(newFavArray),
    httpOnly: true,
    path: "/",
  });
};
