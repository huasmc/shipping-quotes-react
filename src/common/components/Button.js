const Button = ({ label, onClick }) => {
	return (
		<button className="app-button" onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
