import { CompanyStyle } from "../models/company-style";

export function dateFormat(dateString: string): string {
	const date = new Date(dateString);
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const day = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	return month + " " + day + ", " + year;
}

export function getCompanyStyle(company: string): CompanyStyle {
	let companyStyle: CompanyStyle;

	switch (company) {
		case "FACEBOOK":
			companyStyle = { logo: "facebook.webp", primary: "#FFFFFF", secondary: "#1877f2", background: "#1877F2" };
			break;
		case "AMAZON":
			companyStyle = { logo: "amazon.webp", primary: "#FFFFFF", secondary: "#F79C34", background: "#262F3D" };
			break;
		case "NETFLIX":
			companyStyle = { logo: "netflix.webp", primary: "#E50A13", secondary: "#B1060F", background: "#000000" };
			break;
		case "GOOGLE":
			companyStyle = { logo: "google.webp", primary: "#4285F4", secondary: "#34A853", background: "#EEEEEE" };
			break;
		default:
			companyStyle = { logo: "fang.webp", primary: "#F2F2F2", secondary: "#C20A3E", background: "#C20A3E" };
			break;
	}

	return companyStyle;
}