export default {
	clientOptions: {
		intents: ["Guilds", "GuildMessages"]
	},
	plugins: [],
	defaults: {
		help: false,
		dev: false,
	},
	logger: {
		level: 'warn'
	}
,	sage: {
		errorChannelId: "1202538401799081984",
		errorReplies: true,
		errorMessage: 'Please try again!'
	},
	type: 'robo'
}
