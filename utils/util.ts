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
  const dark = { primary: "black", secondary: "gray" };
  const light = { primary: "white", secondary: "whitesmoke" };

  switch (company) {
    case "FACEBOOK":
      companyStyle = {
        logo: "facebook.webp",
        primary: light.primary,
        secondary: light.secondary,
        background: "#1877F2",
        hover: brighten("#1877F2", 20)
      };
      break;
    case "AMAZON":
      companyStyle = {
        logo: "amazon.webp",
        primary: light.primary,
        secondary: light.secondary,
        background: "#262F3D",
        hover: brighten("#262F3D", 20)
      };
      break;
    case "NETFLIX":
      companyStyle = {
        logo: "netflix.webp",
        primary: light.primary,
        secondary: light.secondary,
        background: "#000000",
        hover: brighten("#000000", 20)
      };
      break;
    case "GOOGLE":
      companyStyle = {
        logo: "google.webp",
        primary: dark.primary,
        secondary: dark.secondary,
        background: "#EEEEEE",
        hover: brighten("#EEEEEE", -20)
      };
      break;
    default:
      companyStyle = {
        logo: "fang.webp",
        primary: "#F2F2F2",
        secondary: "#C20A3E",
        background: "#C20A3E",
        hover: brighten("#C20A3E", -20)
      };
      break;
  }

  return companyStyle;
}

// Lighten (positive amount) or darken (negative amount) a hexadecimal color
export function brighten(hexColor: string, amount: number) {
  let usePound = false;

  if (hexColor[0] == "#") {
    hexColor = hexColor.slice(1);
    usePound = true;
  }

  let num = parseInt(hexColor, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}