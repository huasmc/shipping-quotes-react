const Dropdown = ({ label, options, value, setValue }) => {
	const onOptionSelect = (event) => {
		setValue(JSON.parse(event.target.value));
	};
	return (
		<div className="dropdown-field">
			<ul style={{ paddingLeft: "20px", margin: "0" }}>
				<li>
					<span className="label">{label}</span>
				</li>
				<li>
					<select name={label} onChange={onOptionSelect}>
						{Array.isArray(options) &&
							options.map((option) => {
								return (
									<option key={option.name} value={JSON.stringify(option)}>
										{option.name}
									</option>
								);
							})}
					</select>
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
