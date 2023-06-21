import React, { useEffect, useState } from "react";

interface TypingEffectProps {
	text: string;
	typingSpeed?: number;
	delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
	text,
	typingSpeed = 100,
	delay = 1000,
}) => {
	const [currentText, setCurrentText] = useState("");

	useEffect(() => {
		let currentIndex = 0;
		let timer: number | undefined;

		const type = () => {
			if (currentIndex < text.length) {
				setCurrentText((prevText) => prevText + text.charAt(currentIndex));
				currentIndex++;
				timer = setTimeout(type, typingSpeed);
			} else {
				clearTimeout(timer);
			}
		};

		timer = setTimeout(type, delay);

		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [text, typingSpeed, delay]);

	return <p>{currentText}</p>;
};

export default TypingEffect;
