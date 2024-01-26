/** @type {import('knip').KnipConfig} */
const config = {
	workspaces: {
		'packages/app': {
			entry: ['index.js'],
		},
		'packages/shared': {
			entry: ['index.js'],
		},
	},
}

export default config
