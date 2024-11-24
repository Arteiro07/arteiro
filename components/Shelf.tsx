type ShelfProps = {
	position: [number, number, number];
	size: [number, number, number];
};
export default function Shelf(props: ShelfProps) {
	return (
		<>
			<mesh position={props.position}>
				<boxGeometry args={props.size} />
				<meshStandardMaterial color={"black"} />
			</mesh>
		</>
	);
}
