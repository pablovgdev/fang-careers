import React, { useContext } from "react";
import Select, { OptionTypeBase, ValueType } from "react-select";
import { reactSelectStyles } from "../utils/styles";
import { JobsContext } from "./jobs-context";

export default function TagSearch() {
	const { tags, setTagsFilter } = useContext(JobsContext);

	const options = tags.map(tag => ({ value: tag, label: tag }));

	function onChange(value: ValueType<OptionTypeBase, true>) {
		if (value?.length) {
			const newTags = value.map(item => item.label);
			setTagsFilter(newTags);
		} else {
			setTagsFilter([]);
		}
	}

	return (
		<Select
			placeholder="Tags"
			inputId="tags"
			options={options}
			styles={reactSelectStyles}
			isClearable={true}
			isMulti={true}
			onChange={onChange}
		/>
	);
}