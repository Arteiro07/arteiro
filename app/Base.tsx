"use client";
import { CAMERASTART } from "@/utils/constants";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import SuspenseFallback from "./SuspenseFallback";

export default function Base() {
	return (
		<div className=" absolute  h-full w-full p-0 m-0">
			<Suspense fallback={<SuspenseFallback />}>
				<Canvas camera={CAMERASTART}>
					{/* <ScrollControls> */}
					<Scene />
					{/* </ScrollControls> */}
				</Canvas>
			</Suspense>
		</div>
	);
}
