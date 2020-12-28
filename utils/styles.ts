import { CSSProperties } from "react";

export const reactSelectStyles = {
	control: (base: CSSProperties) => ({
		...base,
		border: "none",
		borderBottom: "1px solid gray",
		borderRadius: 0,
		outline: "none",
		boxShadow: "none",
		cursor: "pointer",
		":hover": {
			outline: "none",
			boxShadow: "none",
		},
		"@media (min-width: 769px)": {
			border: "1px solid lightgray",
			borderRadius: "5px",
			":hover": {
				outline: "none",
				boxShadow: "none",
				border: "1px solid lightgray",
			},
		}
	}),
	menu: (base: CSSProperties) => ({
		...base,
		margin: 0,
		borderRadius: 0,
		"@media (min-width: 769px)": {
			border: "1px solid lightgray",
			borderTop: "none",
			borderRadius: "5px"
		}
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		padding: 0,
		"@media (min-width: 769px)": {
			borderRadius: "5px"
		}
	}),
	option: (base: CSSProperties) => ({
		...base,
		padding: "5px 10px",
		color: "black",
		backgroundColor: "white",
		":hover": {
			backgroundColor: "lightgray"
		},
	}),
};