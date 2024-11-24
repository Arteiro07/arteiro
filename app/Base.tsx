"use client";
import { CAMERASTART, SKYLIGHT } from "@/utils/constants";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import SuspenseFallback from "./SuspenseFallback";

export default function Base() {
	return (
		<div className=" absolute  h-full w-full p-0 m-0">
			{/* <SuspenseFallback /> */}
			<Suspense fallback={<SuspenseFallback />}>
				<Canvas camera={CAMERASTART} color={SKYLIGHT}>
					<color attach="background" args={["#e0e0e0"]} />
					<Scene />
				</Canvas>
			</Suspense>
		</div>
	);
}
