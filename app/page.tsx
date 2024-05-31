import Base from "./Base";
import Footer from "./Footer";
import Logo from "./Logo";

export default function Home() {
	return (
		<main className="min-h-screen m-0">
			<Logo />
			<Base />
			<Footer />
		</main>
	);
}
