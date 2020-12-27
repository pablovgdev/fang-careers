import React, { MouseEvent, useContext } from "react";
import styles from "../styles/tag-label.module.css";
import { JobsContext } from "./jobs-context";

interface TagProps {
	tag: string
}

export default function TagLabel({ tag }: TagProps) {
	const { tags } = useContext(JobsContext);

	function isSelected() {
		if (!tags.find(currentTag => currentTag === tag)) {
			return false;
		} else {
			return true;
		}
	}

	return (
		<span
			className={styles.tagLabel}
			key={tag}
			style={{
				color: isSelected() ? "white" : "dimgray",
				backgroundColor: isSelected() ? "dimgray" : "white"
			}}
		>
			{tag}
		</span>
	);
}