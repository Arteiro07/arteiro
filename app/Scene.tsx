"use client";
import { CAMERASTART, SPEED } from "@/utils/constants";
import { useKeyboard } from "@/utils/useMovement";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState } from "react";
import * as THREE from "three";
import Floor from "./Floor";
import Roof from "./Roof";
import SuspenseFallback from "./SuspenseFallback";
import Wall from "./Wall";

/*
    Staging of most loadComponents, floor walls and each "room"
    
    aftereffects
*/

export default function Scene() {
	const [length, setLength] = useState(100);

	return (
		<div className=" absolute  h-full w-full p-0 m-0">
			<Suspense fallback={<SuspenseFallback />}>
				<Canvas camera={CAMERASTART}>
					<ambientLight intensity={0.5} />
					<Camera />
					{/* <OrbitControls /> */}
					<Wall length={length} />
					<Floor length={length} />
					<Roof length={length} />
					{/* <EffectComposer>
						<Bloom luminanceThreshold={0} luminanceSmoothing={4} height={300} />
					</EffectComposer> */}
				</Canvas>
			</Suspense>
		</div>
	);
}

export function Camera() {
	const { moveRight, moveLeft } = useKeyboard();
	const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(
		CAMERASTART.position
	);

	useFrame((state, delta) => {
		if (moveLeft && moveRight) {
		} else if (moveLeft) {
			let a = state.camera.position;
			a.x = a.x - 1;
			setCameraPosition(a);
		} else if (moveRight) {
			let a = state.camera.position;
			a.x = a.x + 1;
			setCameraPosition(a);
		} else {
		}
		state.camera.position.lerp(cameraPosition, delta * SPEED);
	});

	return <></>;
}
