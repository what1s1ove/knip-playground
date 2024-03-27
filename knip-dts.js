/** @type {import('knip').KnipConfig} */
const config = {
	ignore: ["knip-js.js"],
	workspaces: {
		"apps/app-a": {
			entry: ["index.js"],
		},
		"apps/app-b": {
			entry: ["index.js"],
		},
		"packages/shared": {
			entry: ["build/index.d.ts"],
			ignore: [`src/**/*`],
			includeEntryExports: true,
		},
	},
};

export default config;
