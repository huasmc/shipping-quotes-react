export const getAirDeliveryEstimate = () => {
	const minimumDays = Math.floor(Math.random() * 5) + 3;
	const maximumDays = Math.floor(Math.random() * 3) + 2;
	return { minimumDays, maximumDays: minimumDays + maximumDays };
};

export const getOceanDeliveryEstimate = () => {
	const minimumDays = Math.floor(Math.random() * 6) + 25;
	const maximumDays = Math.floor(Math.random() * 6) + 5;
	return { minimumDays, maximumDays: minimumDays + maximumDays };
};

export const getDateDeliveryEstimate = (days) => {
	const today = new Date();
	const estimatedDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
	const options = { month: "short", day: "numeric" };
	return estimatedDate.toLocaleDateString("en-US", options);
};
