export interface Job {
	id: string;
	company: string;
	title: string;
	category: string;
	description: string;
	locations: string[];
	tags: Tag[];
	date: string;
	url: string;
}

export interface Tag {
	value: string;
	type: TAG_TYPE;
}

export enum TAG_TYPE {
	PROGRAMMING_LANGUAGE = "PROGRAMMING_LANGUAGE"
}