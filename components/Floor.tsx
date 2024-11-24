import { useCustomTexture } from "@/hooks/useCustomTexture";
import { DEPTH, LENGTH } from "@/utils/constants";
import { Plane } from "@react-three/drei";

type FloorProps = {
	index: number;
	deep?: boolean;
};
export default function Floor({ index, deep = false }: FloorProps) {
	const groundTexture = useCustomTexture({
		x: 1,
		y: deep ? 3 : 6,
		name: "/ground/wood_floor",
		rotation: Math.PI / 2,
	});

	const x = index * LENGTH;
	return (
		<>
			<Plane
				rotation-x={-Math.PI / 2}
				args={[LENGTH, DEPTH / 2]}
				receiveShadow
				position={[x, 0, -DEPTH / 4]}
			>
				<meshStandardMaterial {...groundTexture} />
			</Plane>
			{deep && (
				<Plane
					rotation-x={-Math.PI / 2}
					args={[LENGTH, DEPTH / 2]}
					receiveShadow
					position={[x, 0, (-DEPTH * 3) / 4]}
				>
					<meshStandardMaterial {...groundTexture} />
				</Plane>
			)}
		</>
	);
}
