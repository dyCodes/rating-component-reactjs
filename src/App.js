import { useState } from "react";
import FormCard from "./components/FormCard";
import ThankYou from "./components/ThankYou";

function App() {
	const [rating, setRating] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const submitForm = () => {
		if (rating) {
			setIsSubmitted(true);
		}
	};

	const handleClick = (value) => {
		setRating(value);
	};

	return (
		<main className="p-5 min-h-screen grid place-content-center">
			{isSubmitted ? (
				<ThankYou rating={rating} />
			) : (
				<FormCard submitForm={submitForm} handleClick={handleClick} />
			)}
		</main>
	);
}

export default App;
