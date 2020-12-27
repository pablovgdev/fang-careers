import React, { useContext } from "react";
import Select, { OptionTypeBase, ValueType } from "react-select";
import { JobsContext } from "./jobs-context";

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
			isClearable={true}
			onChange={onChange}
		/>
	);
}