import { Suspense, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";

import { Mesh } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Html, Image } from "@react-three/drei";

// import { DRACOLoader } from "three/examples/jsm/loaders/dracoloader";

const PokedexModel = () => {
  // const gltf = useLoader(GLTFLoader, "models/car/scene.gltf");
  const loader = new GLTFLoader();
  // const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath('/examples/js,/libs/draco/');
  // loader.setDRACOLoader( dracoLoader );

  // Load a glTF resource
  // loader.load(
  //   // resource URL
  //   "models/car/scene.gltf",
  //   // called when the resource is loaded
  //   function (gltf) {
  //     scene.add(gltf.scene);

  //     gltf.animations; // Array<THREE.AnimationClip>
  //     gltf.scene; // THREE.Group
  //     gltf.scenes; // Array<THREE.Group>
  //     gltf.cameras; // Array<THREE.Camera>
  //     gltf.asset; // Object
  //   },
  //   // called while loading is progressing
  //   function (xhr) {
  //     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  //   },
  //   // called when loading has errors
  //   function (error) {
  //     console.log("An error happened");
  //   }
  // );

  const gltf = useLoader(GLTFLoader, "/3dmodel/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(1.3, 1.3, 1.3);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.rotation.set(0, -1.5, 0);
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};

export default PokedexModel;
