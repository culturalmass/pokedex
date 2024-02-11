"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import {
  CubeCamera,
  Environment,
  Html,
  Image,
  OrbitControls,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";

import PokedexModel from "./pokedex-model";
import { AmbientLight, Light, LightProbe } from "three";
import { useParams } from "next/navigation";
import { getPokemonById } from "@/actions/getPokemon";

const Model = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // pokemon?.sprites?.other?.showdown?.front_default
  console.log(pokemon !== null);

  useEffect(() => {
    setIsLoading(true);
    getPokemonById(id)
      .then((pokemon) => {
        setPokemon(pokemon);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      <OrbitControls target={[0, 0.35, 0.35]} maxPolarAngle={1.45} />
      {/* <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} /> */}

      <ambientLight intensity={2.5} />

      <PokedexModel />
      {/* <Html position={[0.5, 0.5, 0.1]} transform occlude>
        <h1>hello</h1>
        <p>world</p>
      </Html> */}

      {!isLoading && pokemon !== null && (
        <Image
          url={pokemon?.sprites?.front_default}
          position={[-0.1, 0.45, 0.08]}
          rotation={[0, 0.08, 0]}
          scale={1.7}
          className="bg-black"
        />
      )}

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={150}
        angle={100}
        penumbra={0.5}
        position={[10, 0, -4]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
};

export const Scene = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Model />
      </Canvas>
    </Suspense>
  );
};

export default Scene;
