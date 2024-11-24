import { useCustomTexture } from "@/hooks/useCustomTexture";
import { DEPTH, HEIGHT, LENGTH } from "@/utils/constants";
import { Plane } from "@react-three/drei";

type WallProps = {
	index: number;
};
export default function Wall({ index }: WallProps) {
	const baseboardTexture = useCustomTexture({
		x: 2,
		y: 1,
		name: "/wood_light/oak_veneer_01",
		rotation: 0,
	});

	const x = index * LENGTH;
	return (
		<>
			{/* Wall */}
			<Plane
				position={[x, HEIGHT / 2, -DEPTH / 2]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, 0, 0]}
				args={[LENGTH, HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial attach="material" color="white" />
			</Plane>
			{/* Baseboard */}
			<Plane
				position={[x, (0.05 * HEIGHT) / 2, -DEPTH / 2 - 0.7]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, 0, 0]}
				args={[LENGTH, 0.05 * HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial {...baseboardTexture} />
			</Plane>
		</>
	);
}
