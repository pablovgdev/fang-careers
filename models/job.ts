import { Tag } from "./tags";

export interface Job {
  hash: string;
  category: string;
  company: string;
  title: string;
  description: string;
  locations: string[];
  countries: string[];
  tags: Tag[];
  date: string;
  url: string;
}
