import { DEPTH } from "@/utils/constants";
import { useCustomTexture } from "@/utils/useCustomTexture";
import { Plane } from "@react-three/drei";

type FloorProps = {
	length: number;
};

export default function Floor(props: FloorProps) {
	const groundTexture = useCustomTexture({
		x: 1,
		y: 5,
		name: "/ground/wood_floor",
		rotation: Math.PI / 2,
	});
	return (
		<Plane rotation-x={-Math.PI / 2} args={[props.length, DEPTH]} receiveShadow>
			<meshStandardMaterial {...groundTexture} />
		</Plane>
	);
}
