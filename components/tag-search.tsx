import React, { useContext } from "react";
import Select, { OptionTypeBase, ValueType } from "react-select";
import { allTags } from "../models/tags";
import { reactSelectStyles } from "../utils/styles";
import { JobsContext } from "./jobs-context";

export default function TagSearch() {
	const { setTags } = useContext(JobsContext);
	const flatTags = allTags.map(tagType => tagType.tags).flat();
	const options = flatTags.map(tag => ({ value: tag, label: tag }));

	function onChange(value: ValueType<OptionTypeBase, true>) {
		if (value?.length) {
			const newTags = value.map(item => item.label);
			setTags(newTags);
		} else {
			setTags([]);
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