import { useEffect, useState } from "react";

const Input = ({ label, value, setValue, type }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (event) => {
		const { value: inputValue } = event.target;
		const onlyText = /^[A-Za-z]+$/;
		if (type === "text" && (inputValue === "" || onlyText.test(inputValue)))
			setValue(inputValue);
		else if (type !== "text") {
			setValue(inputValue);
		}
	};

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	return (
		<div className="input-field">
			<ul style={{ paddingLeft: "20px" }}>
				<li>
					<span className="label">{label}</span>
				</li>
				<li>
					<input value={inputValue} type={type} onChange={onInputChange} />
				</li>
			</ul>
		</div>
	);
};

export default Input;
