import { useCustomTexture } from "@/hooks/useCustomTexture";
import { DEPTH, HEIGHT, LENGTH } from "@/utils/constants";
import { Plane } from "@react-three/drei";

type Deep_WallProps = {
	index: number;
};
export default function DeepWall(props: Deep_WallProps) {
	const baseboardTexture = useCustomTexture({
		x: 1,
		y: 1,
		name: "/wood_light/oak_veneer_01",
		rotation: 0,
	});

	const x = props.index * LENGTH;
	return (
		<>
			{/* main */}
			{/* Wall */}
			<Plane
				position={[x, HEIGHT / 2, -DEPTH - 0.5]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, 0, 0]}
				args={[LENGTH + 0.5, HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial attach="material" color="white" />
			</Plane>
			{/* Baseboard */}
			<Plane
				position={[x, (0.05 * HEIGHT) / 2, -DEPTH - 1.4]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, 0, 0]}
				args={[LENGTH + 1, 0.05 * HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial {...baseboardTexture} />
			</Plane>
			{/* side_left */}
			{/* wall */}
			<Plane
				position={[x - LENGTH / 2, HEIGHT / 2, -DEPTH + 7.5]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, Math.PI / 2, 0]}
				args={[DEPTH / 2 + 0.3, HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial attach="material" color="white" />
			</Plane>
			{/* baseboard */}
			<Plane
				position={[x - LENGTH / 2 - 0.9, (0.05 * HEIGHT) / 2, -DEPTH + 7.6]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, Math.PI / 2, 0]}
				args={[DEPTH / 2 + 0.5, 0.05 * HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial {...baseboardTexture} />
			</Plane>

			{/* side_right */}
			{/* wall */}
			<Plane
				position={[x + LENGTH / 2, HEIGHT / 2, -DEPTH + 7.5]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, -Math.PI / 2, 0]}
				args={[DEPTH / 2 + 0.3, HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial attach="material" color="white" />
			</Plane>
			{/* baseboard */}
			<Plane
				position={[x + LENGTH / 2 + 0.9, (0.05 * HEIGHT) / 2, -DEPTH + 7.6]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, -Math.PI / 2, 0]}
				args={[DEPTH / 2 + 0.5, 0.05 * HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial {...baseboardTexture} />
			</Plane>
		</>
	);
}
