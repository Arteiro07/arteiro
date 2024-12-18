/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/assets/neon.glb -o Neon.tsx --transform 
Files: public/assets/neon.glb [276.17KB] > C:\Users\Arteiro\Documents\Projetos\web\arteiro\neon-transformed.glb [11.67KB] (96%)
*/

import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Cylinder001: THREE.Mesh;
		Cylinder002: THREE.Mesh;
	};
	materials: {
		["Neon.001"]: THREE.MeshStandardMaterial;
		Neon: THREE.MeshStandardMaterial;
	};
};

export function Neon(props: JSX.IntrinsicElements["group"]) {
	const [purpleShiny, setShinyPurple] = useState(false);
	const { nodes, materials } = useGLTF("/assets/neon.glb") as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<mesh
				onPointerEnter={() => setShinyPurple(true)}
				onPointerLeave={() => setShinyPurple(false)}
				geometry={nodes.Cylinder001.geometry}
				material={materials["Neon.001"]}
				position={[-3.906, -7.062, -0.031]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				geometry={nodes.Cylinder002.geometry}
				material={materials.Neon}
				position={[-3.906, -7.062, -0.031]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
		</group>
	);
}

useGLTF.preload("/assets/neon.glb");
