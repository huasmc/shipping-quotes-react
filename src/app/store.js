import { configureStore } from "@reduxjs/toolkit";
import shippingQuoteReducer from "../features/shippingQuote/ShippingQuoteSlice";

export const store = configureStore({
	reducer: { shippingQuoteReducer },
});
