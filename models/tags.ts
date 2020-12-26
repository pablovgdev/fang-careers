export interface Tag {
	value: string;
	type: TAG_TYPE;
}

export enum TAG_TYPE {
	PROGRAMMING_LANGUAGE = "PROGRAMMING_LANGUAGE",
	FRAMEWORK = "FRAMEWORK",
	TECHNOLOGY = "TECHNOLOGY",
	PLATFORM = "PLATFORM"
}

export const allTags = [
	{
		type: TAG_TYPE.PROGRAMMING_LANGUAGE,
		tags: [
			"BASH",
			"C",
			"C++",
			"C#",
			"CSS",
			"DART",
			"ELIXIR",
			"ERLANG",
			"GOLANG",
			"HACK",
			"HASKELL",
			"HTML",
			"JAVASCRIPT",
			"JAVA",
			"KOTLIN",
			"MATLAB",
			"OBJECTIVE-C",
			"PERL",
			"PHP",
			"POWERSHELL",
			"PYTHON",
			"RUBY",
			"RUST",
			"SCALA",
			"SHELL",
			"SOLIDITY",
			"SWIFT",
			"TYPESCRIPT"]
	},
	{
		type: TAG_TYPE.PLATFORM,

		tags: ["AWS",
			"GCP",
			"AZURE",
			"ANDROID",
			"IOS"]
	},
	{
		type: TAG_TYPE.FRAMEWORK,

		tags: ["REACT",
			"VUE",
			"ANGULAR",
			"SVELTE",
			"EXPRESS",
			"DJANGO",
			"FLASK"]
	},
	{
		type: TAG_TYPE.TECHNOLOGY,

		tags: ["NOSQL",
			"SQL",
			"NODE",
			"DOCKER",
			"KUBERNETES"]
	}
];