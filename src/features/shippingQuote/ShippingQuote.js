import { memo } from "react";
import ShippingQuoteForm from "./components/ShippingQuoteForm";

const ShippingQuote = () => {
	return (
		<div>
			<ShippingQuoteForm />
		</div>
	);
};

export default memo(ShippingQuote);
