import { memo } from "react";
import { useSelector } from "react-redux";
import ShippingQuoteBox from "./components/ShippingQuoteBox";
import ShippingQuoteForm from "./components/ShippingQuoteForm";
import { selectIsQuoteValid } from "./ShippingQuoteSlice";

const ShippingQuote = () => {
	const isQuoteValid = useSelector(selectIsQuoteValid);
	return (
		<div>
			<ShippingQuoteForm />
			{isQuoteValid && <ShippingQuoteBox />}
		</div>
	);
};

export default memo(ShippingQuote);
