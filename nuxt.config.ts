// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
	alias: {
		'@': resolve(__dirname, '/')
	},
	css: [
		'normalize.css/normalize.css',
		'~/assets/styles/global.styl'
	],
	devtools: {enabled: true}
})
