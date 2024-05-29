"use client";
import { CAMERASTART, HEIGHT } from "@/utils/constants";
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
				<Canvas camera={CAMERASTART}>
					<ambientLight intensity={0.5} />
					<pointLight intensity={1000} position={[0, HEIGHT, 0]} />
					{/* <OrbitControls /> */}
					<Wall length={length} />
					<Floor length={length} />
					<Roof length={length} />
				</Canvas>
			</Suspense>
		</div>
	);
}
