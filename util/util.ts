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
		case "AMAZON":
			companyStyle = { logo: "amazon.webp", primary: "#F79C34", secondary: "#262F3D" };
			break;
		case "NETFLIX":
			companyStyle = { logo: "netflix.webp", primary: "#E50A13", secondary: "#000000" };
			break;
		case "GOOGLE":
			companyStyle = { logo: "google.webp", primary: "#68A851", secondary: "#E0E0E0" };
			break;
		default:
			companyStyle = { logo: "fang.webp", primary: "#F2F2F2", secondary: "#C20A3E" };
			break;
	}

	return companyStyle;
}