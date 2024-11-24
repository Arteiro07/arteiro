import { CAMERASTART, SPEED } from "@/utils/constants";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
import { useKeyboard } from "./useMovement";

export default function useKeyboardMovement() {
	const { moveRight, moveLeft } = useKeyboard();
	const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(
		CAMERASTART.position
	);

	// const scroll = useScroll();
	// console.log(scroll);

	useFrame((state, delta) => {
		if (moveLeft && moveRight) {
		} else if (moveLeft) {
			let a = state.camera.position;
			a.x = a.x - SPEED;
			setCameraPosition(a);
		} else if (moveRight) {
			let a = state.camera.position;
			a.x = a.x + SPEED;
			setCameraPosition(a);
		} else {
		}
		state.camera.position.lerp(cameraPosition, delta * SPEED);
	});
}
