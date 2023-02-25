import { createSlice } from "@reduxjs/toolkit";
import { shippingChannels } from "../../common/config/shippingChannels";
import {
	getAirDeliveryEstimate,
	getOceanDeliveryEstimate,
} from "../../utils/deliveryDates";

const shippingQuoteSlice = createSlice({
	name: "shippingQuote",
	initialState: {
		originCountry: "",
		destinationCountry: "",
		quotePrice: "",
		shippingChannel: "",
		estimatedDelivery: "",
		isQuoteValid: false,
	},
	reducers: {
		createQuote: (state, action) => {
			const { originCountry, destinationCountry, quotePrice, shippingChannel } =
				action.payload;
			state.originCountry = originCountry;
			state.destinationCountry = destinationCountry;
			state.quotePrice = quotePrice;
			state.shippingChannel = shippingChannel;
			state.estimatedDelivery =
				shippingChannel.id === shippingChannels[0].id
					? getAirDeliveryEstimate()
					: getOceanDeliveryEstimate();
			state.isQuoteValid =
				state.originCountry &&
				state.destinationCountry &&
				state.quotePrice &&
				state.shippingChannel;
		},
	},
});

export const selectShippingChannel = (state) =>
	state.shippingQuoteReducer.shippingChannel;
export const selectEstimatedDelivery = (state) =>
	state.shippingQuoteReducer.estimatedDelivery;
export const selectOriginCountry = (state) =>
	state.shippingQuoteReducer.originCountry;
export const selectDestinationCountry = (state) =>
	state.shippingQuoteReducer.destinationCountry;
export const selectQuotePrice = (state) =>
	state.shippingQuoteReducer.quotePrice;
export const selectIsQuoteValid = (state) =>
	state.shippingQuoteReducer.isQuoteValid;
export const { createQuote } = shippingQuoteSlice.actions;
export default shippingQuoteSlice.reducer;
