import { Tag } from "./tags";

export interface Job {
	id: string;
	company: string;
	title: string;
	category: string;
	description: string;
  locations: string[];
  countries: string[];
	tags: Tag[];
	date: string;
	url: string;
}