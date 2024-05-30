import { DEPTH, HEIGHT, SKYLIGHT, SKY_LIGHT_DISTANCE } from "@/utils/constants";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
	RectAreaLightHelper,
	RectAreaLightUniformsLib,
} from "three/examples/jsm/Addons.js";

type RoofProps = {
	length: number;
};

export default function Roof(props: RoofProps) {
	const roof: JSX.Element[] = [];

	for (let i = 0; i * SKY_LIGHT_DISTANCE < props.length; i = i + 1) {
		roof.push(
			<>
				<mesh
					key={"teto" + i}
					position={[i * SKY_LIGHT_DISTANCE - props.length / 2, HEIGHT, 0]} // Adjust position as needed
					rotation-x={Math.PI / 2} // Adjust args as needed
					receiveShadow
				>
					<boxGeometry key={"box" + i} args={[SKY_LIGHT_DISTANCE / 2, DEPTH]} />
					<meshStandardMaterial
						key={"material" + i}
						attach="material"
						color="white"
					/>
				</mesh>
				<RectAreaLightWithHelper
					key={"luz" + i}
					position={[
						i * SKY_LIGHT_DISTANCE - props.length / 2 + SKY_LIGHT_DISTANCE / 2,
						HEIGHT,
						0,
					]}
					color={SKYLIGHT}
				/>
			</>
		);
	}
	return <>{roof}</>;
}

type RectAreaLightWithHelperProps = {
	position: [number, number, number];
	color: string;
};

const RectAreaLightWithHelper = (props: RectAreaLightWithHelperProps) => {
	// Besides the useThree hook, all of this is taken straight from one of the examples on threejs.org: https://threejs.org/examples/#webgl_lights_rectarealight.

	const { scene } = useThree();

	// This somehow changes the texture of the ground-plane and makes it more shiny? Very interesting
	RectAreaLightUniformsLib.init();

	const rectLight = new THREE.RectAreaLight(
		props.color,
		0.5,
		SKY_LIGHT_DISTANCE / 2,
		DEPTH
	);
	rectLight.rotateX(-Math.PI / 2);
	rectLight.position.set(...props.position);
	scene.add(rectLight);
	scene.add(new RectAreaLightHelper(rectLight));

	return null;
};
