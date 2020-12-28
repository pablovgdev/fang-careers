import React, { useContext } from "react";
import Select, { OptionTypeBase, ValueType } from "react-select";
import { JobsContext } from "./jobs-context";
import styles from "../styles/react-select.module.css";
import { reactSelectStyles } from "../utils/styles";

export default function LocationFilter() {
	const { locations, setLocationFilter } = useContext(JobsContext);
	const options = locations.map(location => ({ value: location, label: location }));

	function onChange(value: ValueType<OptionTypeBase, false>) {
		setLocationFilter(value?.label);
	}

	return (
		<Select
			placeholder="Location"
			inputId="locations"
			options={options}
			styles={reactSelectStyles}
			isClearable={true}
			onChange={onChange}
		/>
	);
}