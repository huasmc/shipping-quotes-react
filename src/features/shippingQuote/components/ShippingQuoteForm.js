import { memo, useState } from "react";
import Button from "../../../common/components/Button";
import Dropdown from "../../../common/components/Dropdown";
import Input from "../../../common/components/Input";
import { shippingChannels } from "../../../common/config/shippingChannels";

const ShippingQuoteForm = () => {
	const [originCountry, setOriginCountry] = useState("");
	const [destinationCountry, setDestinationCountry] = useState("");
	const [quotePrice, setQuotePrice] = useState("");
	const [shippingChannel, setShippingChannel] = useState(shippingChannels[0]);

	const onCreateQuote = () => {};

	const isFormValid = () => {
		return originCountry && destinationCountry && quotePrice && shippingChannel;
	};

	return (
		<div>
			<Input
				label={"Starting country"}
				value={originCountry}
				setValue={setOriginCountry}
				type="text"
			/>
			<Input
				label="Destination country"
				value={destinationCountry}
				setValue={setDestinationCountry}
				type="text"
			/>
			<Input
				label="Quote price"
				value={quotePrice}
				setValue={setQuotePrice}
				type="number"
			/>
			<Dropdown
				label="Shipping channel"
				value={shippingChannel}
				setValue={setShippingChannel}
				options={shippingChannels}
			/>
			<div style={{ paddingLeft: "20px" }}>
				<Button
					label="Create quote"
					onClick={onCreateQuote}
					disabled={isFormValid()}
				></Button>
			</div>
		</div>
	);
};

export default memo(ShippingQuoteForm);
