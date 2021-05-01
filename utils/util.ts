import { CompanyStyle } from "../models/company-style";

export function normalizeDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return month + " " + day + ", " + year;
}

export function normalizeTitle(title: string): string {
  const separatorChars = [",", "-", "(", "/"];
  let normalizedTitle = title;

  for (const separatorChar of separatorChars) {
    normalizedTitle = normalizedTitle.split(separatorChar)[0];
  }

  return normalizedTitle;
}

export function normalizeLocations(locations: string[]): string {
  const normalizedLocations = [];

  for (const location of locations) {
    const validParts = [];
    const parts = location.split(",");

    for (const part of parts) {
      if (part !== part.toUpperCase()) {
        validParts.push(part.trim());
      }
    }

    normalizedLocations.push(validParts.join(", "));
  }

  return normalizedLocations.join(" / ");
}

export function getCompanyStyle(company: string): CompanyStyle {
  let companyStyle: CompanyStyle;
  const dark = { primary: "black", secondary: "gray" };
  const light = { primary: "white", secondary: "whitesmoke" };

  const colors = {
    facebook: "#1877F2",
    amazon: "#262F3D",
    netflix: "#000000",
    google: "#EEEEEE",
    fang: "#C20A3E",
  };

  switch (company) {
    case "FACEBOOK":
      companyStyle = {
        logo: "facebook.webp",
        primary: light.primary,
        secondary: light.secondary,
        background: colors.facebook,
        hover: brighten(colors.facebook, 30),
      };
      break;
    case "AMAZON":
      companyStyle = {
        logo: "amazon.webp",
        primary: light.primary,
        secondary: light.secondary,
        background: colors.amazon,
        hover: brighten(colors.amazon, 30),
      };
      break;
    case "NETFLIX":
      companyStyle = {
        logo: "netflix.webp",
        primary: light.primary,
        secondary: light.secondary,
        background: colors.netflix,
        hover: brighten(colors.netflix, 50),
      };
      break;
    case "GOOGLE":
      companyStyle = {
        logo: "google.webp",
        primary: dark.primary,
        secondary: dark.secondary,
        background: colors.google,
        hover: brighten(colors.google, -30),
      };
      break;
    default:
      companyStyle = {
        logo: "fang.webp",
        primary: "#F2F2F2",
        secondary: "#C20A3E",
        background: colors.fang,
        hover: brighten(colors.fang, -30),
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

  let b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
