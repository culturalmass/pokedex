import getCurrentUser from "@/actions/getCurrentUser";
import { Toggle } from "../components/settings/toggle";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import { Stickers } from "../components/settings/stickers";
import Image from "next/image";

const Settings = async () => {
  const user = await getCurrentUser();
  const navigation = cookies().get("navigation");
  const sticker = cookies().get("sticker");

  if (!user) {
    notFound();
  }

  return (
    <section className="flex flex-col justify-center ml-12 mt-6 gap-y-4 items-center w-screen">
      <h2 className="text-2xl my-4">Settings</h2>

      <h3 className="text-xl">Navegation</h3>
      <Toggle navigation={navigation} />
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      <h3 className="text-xl">Pokedex Personalization</h3>
      <div className="flex gap-x-36">
        {!!sticker && (
          <div>
            <span className="text-xl text-muted-foreground">
              Current sticker selected
            </span>
            <div className="relative h-56 w-56">
              <Image
                src={sticker?.value}
                alt="currentSticker"
                fill
                sizes="1"
                className="object-contain"
              />
            </div>
          </div>
        )}
        <div>
          <span className="text-xl text-muted-foreground">
            Choose a sticker to show in the pokedex!
          </span>
          <Stickers />
        </div>
      </div>
    </section>
  );
};

export default Settings;
