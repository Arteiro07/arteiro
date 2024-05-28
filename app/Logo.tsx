import Image from "next/image";

export default function Logo() {
	return (
		<div className=" absolute m-4">
			<Image
				src="/favicon.ico"
				alt="Logo, an A being 3d printed"
				height={100}
				width={100}
			></Image>
		</div>
	);
}
