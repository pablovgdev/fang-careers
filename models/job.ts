export interface Job {
	id: string;
	company: string;
	title: string;
	category: string;
	description: string;
	basicQualifications: string[];
	preferredQualifications: string[];
	location: string;
	date: string;
	url: string;
}