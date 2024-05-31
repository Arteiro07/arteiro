import { useCustomTexture } from "@/hooks/useCustomTexture";
import { DEPTH } from "@/utils/constants";
import { Plane } from "@react-three/drei";

type FloorProps = {
	length: number;
};

export default function Floor(props: FloorProps) {
	const groundTexture = useCustomTexture({
		x: 1,
		y: 6,
		name: "/ground/wood_floor",
		rotation: Math.PI / 2,
	});
	return (
		<Plane rotation-x={-Math.PI / 2} args={[props.length, DEPTH]} receiveShadow>
			<meshStandardMaterial {...groundTexture} />
		</Plane>
	);
}
