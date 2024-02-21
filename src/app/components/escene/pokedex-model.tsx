"use client";
import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const PokedexModel = () => {
  const gltf = useLoader(GLTFLoader, "/3dmodel/scene.gltf");
  useEffect(() => {
    gltf.scene.scale.set(1.3, 1.3, 1.3);
    gltf.scene.position.set(-1.5, 0, 0);
    gltf.scene.rotation.set(0.1, -1.6, 0);
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};

export default PokedexModel;
