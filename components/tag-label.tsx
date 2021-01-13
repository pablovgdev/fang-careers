import React, { useContext } from "react";
import styles from "../styles/tag-label.module.css";
import { JobsContext } from "./jobs-context";

interface TagProps {
	tag: string
}

export default function TagLabel({ tag }: TagProps) {
	const { tagsFilter } = useContext(JobsContext);

	function isSelected() {
		return tagsFilter.includes(tag);
	}

	function selectedUnselected() {
		return isSelected() ? styles.selected : styles.unselected;
	}

	return (
		<span
			className={`${styles.tagLabel} ${selectedUnselected()}`}
			key={tag}
		>
			{tag}
		</span>
	);
}