import { Plane } from "@react-three/drei";

const HEIGHT = 30;
type RoofProps = {
	length: number;
};
export default function Roof(props: RoofProps) {
	return (
		<Plane
			position={[0, HEIGHT, 0]}
			rotation-x={Math.PI / 2}
			args={[props.length, 30]}
			receiveShadow
		>
			<meshStandardMaterial attach="material" color="white" />
		</Plane>
	);
}
