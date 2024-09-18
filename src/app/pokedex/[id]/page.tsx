"use server"
import { Metadata } from "next"
import getCurrentUser from "@/actions/getCurrentUser"
import { cookies } from "next/headers"
import Scene from "../../components/escene"
import { getPokemonByName } from "@/actions/getPokemon"

interface PokedexProps {
  params: { id: string }
}

export async function generateMetadata({
  params,
}: PokedexProps): Promise<Metadata> {
  const currentId = params?.id?.toString().split("%")[0]
  const pokemon = await getPokemonByName(currentId)
  return {
    title: pokemon.name,
    description: "From the Pokedex with a twist!",
    openGraph: {
      images: pokemon?.sprites?.other?.home?.front_default,
    },
  }
}

const Pokedex = async ({ params }: PokedexProps) => {
  const currentId = params?.id?.toString().split("%")[0]
  const limit = params?.id?.toString().split("3D")[1]
  let pokemon
  if (!Number.isInteger(currentId)) {
    pokemon = await getPokemonByName(currentId)
  }
  const user = await getCurrentUser()

  const sticker = cookies().get("sticker")
  const favorites = cookies().get("favorites")

  return (
    <div className="h-[650px] w-screen">
      <Scene
        user={user}
        id={pokemon.id}
        limit={limit}
        sticker={sticker}
        favorites={favorites}
      />
    </div>
  )
}
export default Pokedex
