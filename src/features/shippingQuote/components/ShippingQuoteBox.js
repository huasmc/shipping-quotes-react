import { memo } from "react";
import { useSelector } from "react-redux";
import { shippingChannels } from "../../../common/config/shippingChannels";
import { UI_STRINGS } from "../../../common/config/UI_STRINGS";
import Boat from "../../../common/icons/boat.png";
import Plane from "../../../common/icons/plane.png";
import { getDateDeliveryEstimate } from "../../../utils/deliveryDates";
import {
	selectDestinationCountry,
	selectEstimatedDelivery,
	selectOriginCountry,
	selectQuotePrice,
	selectShippingChannel,
} from "../ShippingQuoteSlice";

const ShippingQuoteBox = () => {
	const shippingChannel = useSelector(selectShippingChannel);
	const estimatedDelivery = useSelector(selectEstimatedDelivery);
	const originCountry = useSelector(selectOriginCountry);
	const destinationCountry = useSelector(selectDestinationCountry);
	const quotePrice = useSelector(selectQuotePrice);
	return (
		<div className="quote-box">
			<div className="quote-box-left">
				<div className="quote-box-channel">
					<div className="aligned-text">
						{shippingChannel.id === shippingChannels[0].id ? (
							<img src={Plane} alt="plane" className="icon" />
						) : (
							<img src={Boat} alt="ship" className="icon" />
						)}
					</div>
					<div className="quote-box-header" style={{}}>
						<span>
							{UI_STRINGS.QUOTE_BOX.TRADITIONAL}{" "}
							{shippingChannel.name.toLowerCase()}{" "}
							{UI_STRINGS.QUOTE_BOX.FREIGHT}
						</span>
					</div>
				</div>
				<div className="quote-box-delivery">
					<div className="quote-box-days aligned-text">
						{`${estimatedDelivery.minimumDays}-${estimatedDelivery.maximumDays}
						days`}
					</div>
					<div>
						<ul style={{ padding: 0, margin: "7px" }}>
							<li>
								<span className="aligned-text" style={{ fontSize: "15px" }}>
									{UI_STRINGS.QUOTE_BOX.ESTIMATED_DELIVERY}
								</span>
							</li>
							<li>
								<span className="aligned-text" style={{ fontSize: "15px" }}>
									<b>
										{`${getDateDeliveryEstimate(
											estimatedDelivery.minimumDays
										)} - 
										${getDateDeliveryEstimate(estimatedDelivery.maximumDays)}`}
									</b>
								</span>
							</li>
						</ul>
					</div>
					<div className="aligned-text"></div>
				</div>
			</div>
			<div className="quote-box-right">
				<div className="quote-box-destination aligned-text">
					<span>
						{originCountry} -{">"} {destinationCountry}
					</span>
				</div>
				<div className="quote-box-price aligned-text">
					<span>
						{UI_STRINGS.QUOTE_BOX.US_DOLLAR}{" "}
						{Number(quotePrice).toLocaleString("en-US")}
					</span>
				</div>
			</div>
		</div>
	);
};

export default memo(ShippingQuoteBox);
