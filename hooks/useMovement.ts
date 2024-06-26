import { useCallback, useEffect, useState } from "react";

var item: { [key: string]: string };

function actionByKey(key: string) {
	const keyActionMap: { [key: string]: string } = {
		KeyA: "moveLeft",
		KeyD: "moveRight",
		ArrowLeft: "moveLeft",
		ArrowRight: "moveRight",
	};
	return keyActionMap[key];
}

export const useKeyboard = () => {
	const [actions, setActions] = useState({
		moveLeft: false,
		moveRight: false,
	});

	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		const action = actionByKey(e.code);
		if (action) {
			setActions((prev) => {
				return {
					...prev,
					[action]: true,
				};
			});
		}
	}, []);

	const handleKeyUp = useCallback((e: KeyboardEvent) => {
		const action = actionByKey(e.code);
		if (action) {
			setActions((prev) => {
				return {
					...prev,
					[action]: false,
				};
			});
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, [handleKeyDown, handleKeyUp]);

	return actions;
};
