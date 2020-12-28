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

	return (
		<span
			className={styles.tagLabel}
			key={tag}
			style={{
				color: isSelected() ? "white" : "gray",
				backgroundColor: isSelected() ? "gray" : "white"
			}}
		>
			{tag}
		</span>
	);
}