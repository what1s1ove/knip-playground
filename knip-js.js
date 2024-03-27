/** @type {import('knip').KnipConfig} */
const config = {
	ignore: ["knip-dts.js"],
	workspaces: {
		"apps/app-a": {
			entry: ["index.js"],
		},
		"apps/app-b": {
			entry: ["index.js"],
		},
		"packages/shared": {
			entry: ["src/index.js"],
			includeEntryExports: true,
		},
	},
};

export default config;
