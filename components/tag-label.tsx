import React, { MouseEvent, useContext } from "react";
import { Tag, TAG_TYPE } from "../models/tags";
import styles from "../styles/tag-label.module.css";
import { JobsContext } from "./jobs-context";

interface TagProps {
	tag: Tag
}

export default function TagLabel({ tag }: TagProps) {
	const { tags, setTags } = useContext(JobsContext);

	function addTag(event: MouseEvent<HTMLSpanElement>) {
		event.stopPropagation();
		const value = event.currentTarget.innerHTML;
		const type = event.currentTarget.dataset.type as TAG_TYPE;

		if (!tags.find(currentTag => currentTag.value === value)) {
			const newTags = tags.concat([{ value, type }]);
			setTags(newTags);
		} else {
			const newTags = tags.filter(currentTag => currentTag.value !== tag.value);
			setTags(newTags);
		}
	}

	function isSelected() {
		if (!tags.find(currentTag => currentTag.value === tag.value)) {
			return false;
		} else {
			return true;
		}
	}

	return (
		<span
			className={styles.tagLabel}
			data-type={tag.type}
			key={tag.value}
			onClick={addTag}
			style={{
				color: isSelected() ? "white" : "dimgray",
				backgroundColor: isSelected() ? "dimgray" : "white"
			}}
		>
			{tag.value}
		</span>
	);
}