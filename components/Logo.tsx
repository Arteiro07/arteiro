import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		["comma"]: THREE.Mesh;
		["bar"]: THREE.Mesh;
	};
	materials: {
		["Printed plastic"]: THREE.MeshStandardMaterial;
	};
};

type ContextType = Record<
	string,
	React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Logo(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("/assets/logo.glb") as GLTFResult;
	return (
		<group {...props} dispose={null} position={props.position}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.comma.geometry}
				material={materials["Printed plastic"]}
				position={[-0.935, 0.639, 1.285]}
				scale={63.941}
			></mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.bar.geometry}
				material={materials["Printed plastic"]}
				position={[1.069, 0.639, -0]}
				scale={63.941}
			></mesh>
		</group>
	);
}

useGLTF.preload("/assets/logo.glb");
