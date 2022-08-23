import ThankYouImage from "../images/illustration-thank-you.svg";

const ThankYou = ({ rating }) => {
	return (
		<div className="card text-center">
			<img src={ThankYouImage} alt="thankyou" className="block mb-5 mx-auto" />

			<div className="badge my-6 mx-auto text-primary bg-darkblue rounded-full py-1 px-5 w-fit text-sm">
				You selected {rating} out of 5
			</div>

			<h1 className="text-3xl text-white font-bold mb-3">Thank You!</h1>
			<p className="text-gray-light">
				We appreciate you taking the time to give a rating. If you ever need
				more support, don’t hesitate to get in touch!
			</p>
		</div>
	);
};

export default ThankYou;
