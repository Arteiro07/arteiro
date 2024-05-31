import { useCustomTexture } from "@/hooks/useCustomTexture";
import { DEPTH, HEIGHT } from "@/utils/constants";
import { Plane } from "@react-three/drei";

type WallProps = {
	length: number;
};

export default function Wall(props: WallProps) {
	const wallTexture = useCustomTexture({
		x: 4,
		y: 2,
		name: "/wall/painted_plaster_wall",
		rotation: 0,
	});

	return (
		<>
			{/* Wall */}
			<Plane
				position={[0, HEIGHT / 2, -DEPTH / 2 - 0.5]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, 0, 0]}
				args={[props.length, HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial {...wallTexture} />
			</Plane>
			{/* Baseboard */}
			<Plane
				position={[0, (0.05 * HEIGHT) / 2, -DEPTH / 2 + 0.3]} //[x-left to right, y up or down height/2 , closer or further -Half of DEPTH]
				rotation={[0, 0, 0]}
				args={[props.length, 0.05 * HEIGHT]} // [wall size = length, const heigth]
				receiveShadow
			>
				<meshStandardMaterial attach="material" color="white" />
			</Plane>
		</>
	);
}
