import { memo, useState } from "react";
import Input from "../../../common/components/Input";
import { shippingChannels } from "../../../common/config/shippingChannels";

const ShippingQuoteForm = () => {
	const [originCountry, setOriginCountry] = useState("");
	const [destinationCountry, setDestinationCountry] = useState("");
	const [quotePrice, setQuotePrice] = useState("");
	const [shippingChannel, setShippingChannel] = useState(shippingChannels[0]);

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
		</div>
	);
};

export default memo(ShippingQuoteForm);
