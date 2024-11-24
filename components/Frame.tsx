import { Image } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
type FrameProps = {
	position: [number, number, number];
	size: [number, number, number];
};
export default function Frame(props: FrameProps) {
	const image = useRef<THREE.Mesh>(null);

	return (
		<>
			<mesh position={props.position} rotation={[Math.PI / 2, 0, 0]}>
				<boxGeometry args={props.size} />
				<meshBasicMaterial color={"black"} />
				<mesh
					scale={[props.size[0] - 1, 1, props.size[2] - 1]}
					position={[0, 0, 0]}
				>
					<boxGeometry />
					<meshBasicMaterial toneMapped={false} fog={false} />
					<Image
						ref={image}
						raycast={() => null}
						scale={[0.9, 0.9]}
						rotation={[-Math.PI / 2, 0, 0]}
						position={[0, 0.6, 0]}
						url={"./arteiropx.png"}
					/>
				</mesh>
			</mesh>
		</>
	);
}
