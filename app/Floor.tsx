import { Plane } from "@react-three/drei";

const DEPTH = 20;

type FloorProps = {
	length: number;
};

export default function Floor(props: FloorProps) {
	return (
		<Plane rotation-x={-Math.PI / 2} args={[props.length, DEPTH]} receiveShadow>
			<meshStandardMaterial attach="material" color="white" />
		</Plane>
	);
}
