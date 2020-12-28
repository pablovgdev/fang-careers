import React, { useContext } from "react";
import Select, { OptionTypeBase, ValueType } from "react-select";
import { reactSelectStyles } from "../utils/styles";
import { JobsContext } from "./jobs-context";

export default function CompanyFilter() {
	const { companies, setCompanyFilter } = useContext(JobsContext);
	const options = companies.map(company => ({ value: company, label: company }));

	function onChange(value: ValueType<OptionTypeBase, false>) {
		setCompanyFilter(value?.label);
	}

	return (
		<Select
			placeholder="Company"
			inputId="companies"
			options={options}
			styles={reactSelectStyles}
			isClearable={true}
			onChange={onChange}
		/>
	);
}