"use client";

import { Suspense, useState } from "react";
import { Session } from "next-auth";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import NextImage from "next/image";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import PokedexModel from "./pokedex-model";
import EmbedeedContent from "./embedded/embedeed-content";
import { useRouter } from "next/navigation";
import LoadingScreenPokedex from "./loading-screen";

export interface ModelProps {
  user: Session | null;
  id: string;
  limit: string;
  sticker: RequestCookie | undefined;
  favorites: RequestCookie | undefined;
}

const Model = ({ user, id, limit, sticker, favorites }: ModelProps) => {
  const [currentId, setCurrentId] = useState(id?.toString().split("%")[0]);
  const router = useRouter();

  const handleChangeId = (amount: number) => {
    if (Number(currentId) + amount <= 0) {
      return;
    }
    if (Number(currentId) + amount > Number(limit)) {
      return;
    }
    let newId = (Number(currentId) + amount).toString();
    let newUrl = `/pokedex/${newId}&limit=${limit}`;
    setCurrentId(newId);
    window.history.replaceState(
      { ...window.history.state, as: newUrl, url: newUrl },
      "",
      newUrl
    );
  };

  return (
    <>
      <OrbitControls
        target={[0, 0.35, 0.35]}
        enablePan={false}
        maxAzimuthAngle={0.4 * Math.PI}
        minAzimuthAngle={-0.45 * Math.PI}
        maxPolarAngle={1.85}
        minPolarAngle={1.05}
        minDistance={6.9}
        maxDistance={8}
      />
      <PerspectiveCamera makeDefault fov={55} position={[0, -0.2, 5]} />

      <ambientLight intensity={2.5} />

      <PokedexModel />
      <Html position={[1.0, 2.5, 0.2]} rotation={[0.1, 0, 0]} transform>
        <div className="absolute select-none pointer-events-none h-[35px] w-[35px]">
          <NextImage
            src={!!user && !!sticker ? sticker.value : "/stickersPA/sPA12.png"}
            alt="sprites"
            fill
            className="object-contain"
          />
        </div>
      </Html>
      <Html position={[0.5, -0.5, -0.2]} rotation={[0.1, 0, 0]} transform>
        <EmbedeedContent
          user={user}
          id={currentId}
          router={router}
          currentLimit={limit}
          handleChangeId={handleChangeId}
          favorites={favorites}
        />
      </Html>

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

export const Scene = ({ user, id, limit, sticker, favorites }: ModelProps) => {
  const { progress } = useProgress();
  return (
    <>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Model
            user={user}
            id={id}
            limit={limit}
            sticker={sticker}
            favorites={favorites}
          />
        </Suspense>
      </Canvas>

      <LoadingScreenPokedex progress={progress} />
    </>
  );
};

export default Scene;
