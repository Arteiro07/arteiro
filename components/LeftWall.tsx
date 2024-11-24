import { useCustomTexture } from "@/hooks/useCustomTexture";
import { DEPTH, HEIGHT } from "@/utils/constants";
import { Plane } from "@react-three/drei";

export default function LeftWall() {
	const baseboardTexture = useCustomTexture({
		x: 1,
		y: 2,
		name: "/wood_light/oak_veneer_01",
		rotation: 0,
	});
	return (
		<>
			{/* side_left */}
			{/* wall */}
			<Plane
				position={[-DEPTH, HEIGHT / 2, -DEPTH / 4]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, Math.PI / 2, 0]}
				args={[DEPTH / 2 + 0.3, HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial attach="material" color="white" />
			</Plane>
			{/* baseboard */}
			<Plane
				position={[-DEPTH - 0.9, (0.05 * HEIGHT) / 2, -DEPTH / 4]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, Math.PI / 2, 0]}
				args={[DEPTH / 2 + 0.5, 0.05 * HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial {...baseboardTexture} />
			</Plane>
		</>
	);
}
