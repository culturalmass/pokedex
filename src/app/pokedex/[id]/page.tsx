"use server";
import getCurrentUser from "@/actions/getCurrentUser";
import { cookies } from "next/headers";
import Scene from "../../components/escene";
import { getPokemonByName } from "@/actions/getPokemon";

interface PokedexProps {
  params: { id: string };
}

const Pokedex = async ({ params }: PokedexProps) => {
  const currentId = params?.id?.toString().split("%")[0];
  const limit = params?.id?.toString().split("3D")[1];
  let id;
  if (!Number.isInteger(currentId)) {
    let pokemon = await getPokemonByName(currentId);
    id = pokemon.id;
  }
  const user = await getCurrentUser();

  const sticker = cookies().get("sticker");
  const favorites = cookies().get("favorites");

  return (
    <div className="h-[650px] w-screen">
      <Scene
        user={user}
        id={id}
        limit={limit}
        sticker={sticker}
        favorites={favorites}
      />
    </div>
  );
};
export default Pokedex;
