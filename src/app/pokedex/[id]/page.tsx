"use server"
import getCurrentUser from "@/actions/getCurrentUser"
import { cookies } from "next/headers"
import Scene from "../../components/escene"
import { getPokemonByName } from "@/actions/getPokemon"

import Head from "next/head"

interface PokedexProps {
  params: { id: string }
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
    <>
      <Head>
        <meta property="og:title" content={pokemon.name} />
        <meta property="og:description" content={"Visit The Pokedex"} />
        <meta
          property="og:image"
          content={pokemon?.sprites?.other?.home?.front_default}
        />
        <meta
          property="og:url"
          content={`https://pokedex-culturalmass.vercel.app/pokedex/${params}`}
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pokemon.name} />
        <meta name="twitter:description" content={"Visit The Pokedex"} />
        <meta
          name="twitter:image"
          content={pokemon?.sprites?.other?.home?.front_default}
        />
      </Head>
      <div className="h-[650px] w-screen">
        <Scene
          user={user}
          id={pokemon.id}
          limit={limit}
          sticker={sticker}
          favorites={favorites}
        />
      </div>
    </>
  )
}
export default Pokedex
