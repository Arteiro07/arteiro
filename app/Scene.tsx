"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Floor from "./Floor";
import Roof from "./Roof";
import SuspenseFallback from "./SuspenseFallback";
import Wall from "./Wall";

/*
    Staging of most loadComponents, floor walls and each "room"
    ligthing
    aftereffects
*/

export default function Scene() {
	const [length, setLength] = useState(100);

	return (
		<div className=" absolute  h-full w-full p-0 m-0">
			<Suspense fallback={<SuspenseFallback />}>
				<Canvas>
					<ambientLight intensity={5} />
					<pointLight position={[10, 10, 10]} />
					<OrbitControls />
					<Wall length={length} />
					<Floor length={length} />
					<Roof length={length} />
				</Canvas>
			</Suspense>
		</div>
	);
}
