import Floor from "../Floor";
import Roof from "../Roof";
import Wall from "../Wall";

type Room_3Props = {
	index: number;
	x: number;
};
export default function Room_3(props: Room_3Props) {
	return (
		<>
			<Wall index={props.index} />
			<Floor index={props.index} />
			<Roof index={props.index} />
		</>
	);
}
