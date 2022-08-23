import StarIcon from '../images/icon-star.svg'

const FormCard = ({ submitForm, handleClick }) => {

	// const Button = ({ value, handleClick }) => {
	// 	return <button className="btn" onClick={() => handleClick(value)}>{value}</button>
	// }

	return (
		<div className="card">
			<img src={StarIcon} alt="icon" className="mb-7 p-3 rounded-full bg-darkblue" />

			<h1 className="text-3xl text-white font-bold mb-3">How did we do?</h1>
			<p className="text-gray-light">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

			<div className="w-full flex justify-between my-7">
				{/* <Button value={1} handleClick={handleClick} /> */}
				<button className="btn" onClick={() => handleClick(1)}>{1}</button>
				<button className="btn" onClick={() => handleClick(2)}>{2}</button>
				<button className="btn" onClick={() => handleClick(3)}>{3}</button>
				<button className="btn" onClick={() => handleClick(4)}>{4}</button>
				<button className="btn" onClick={() => handleClick(5)}>{5}</button>
			</div>

			<button className="submit" onClick={submitForm}>Submit</button>
		</div>
	)
}

export default FormCard