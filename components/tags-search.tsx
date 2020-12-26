import { FormEvent, MouseEvent, useContext, useState } from "react";
import { allTags, Tag, TAG_TYPE } from "../models/tags";
import styles from "../styles/tags-search.module.css";
import { JobsContext } from "./jobs-context";

export default function TagsSearch() {
	const { tags, setTags } = useContext(JobsContext);
	const [tagOptions, setTagOptions] = useState([] as Tag[]);
	const [query, setQuery] = useState("");

	function matchTags(query: string): Tag[] {
		const autocompleteTags: Tag[] = [];

		if (!query) {
			return autocompleteTags;
		}

		for (const category of allTags) {
			for (const categoryTag of category.tags) {
				if (categoryTag.startsWith(query) && !tags.find(tag => tag.value === categoryTag)) {
					autocompleteTags.push({ value: categoryTag, type: category.type });
				}
			}
		}

		return autocompleteTags;
	}

	function tagSearch(element: FormEvent<HTMLInputElement>) {
		const searchTag = element.currentTarget.value;
		const autocompleteTags = matchTags(searchTag.toUpperCase());
		setQuery(searchTag);
		setTagOptions(autocompleteTags);
	}

	function submitTag(event: FormEvent<HTMLInputElement>) {
		const value = event.currentTarget.value;
		const newTags = tags.filter(tag => tag.value !== value);
		setTags(newTags);
	}

	function loseFocus() {
		setQuery("");
		setTagOptions([]);
	}

	function addTag(event: MouseEvent<HTMLDivElement>) {
		const value = event.currentTarget.innerHTML;
		const type = event.currentTarget.dataset.type as TAG_TYPE;

		if (!tags.find(tag => tag.value === value)) {
			const newTags = tags.concat([{ value, type }]);
			setTags(newTags);
			setQuery("");
			setTagOptions([]);
		}
	}

	function removeTag(event: MouseEvent<HTMLDivElement>) {
		const value = event.currentTarget.innerHTML;
		const newTags = tags.filter(tag => tag.value !== value);
		setTags(newTags);
		setQuery("");
		setTagOptions([]);
	}

	function renderTagOptions() {
		if (tagOptions.length) {
			return (
				<div className={styles.options}>
					{tagOptions.map(tagOption => {
						return (
							<div
								className={styles.option}
								onMouseDown={addTag}
								data-type={tagOption.type}
								key={tagOption.value}
							>
								{tagOption.value}
							</div>
						)
					})}
				</div>
			)
		}
	}

	function renderTags() {
		if (tags.length) {
			return (
				<div className={styles.tags}>
					{tags.map(tag => {
						return (
							<div
								className={styles.tag}
								onClick={removeTag}
								data-type={tag.type}
								key={tag.value}
							>
								{tag.value}
							</div>
						)
					})}
				</div>
			)
		}
	}

	return (
		<div className={styles.tagsSearch}>
			<div className={styles.search}>
				{renderTags()}
				<input
					className={styles.searchInput}
					type="text"
					placeholder="Tags"
					value={query}
					onChange={tagSearch}
					onBlur={loseFocus}
					onSubmit={submitTag}
				/>
			</div>
			{renderTagOptions()}
		</div>
	);
}