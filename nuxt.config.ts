// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
import { defineNuxtConfig } from 'nuxt/config';

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
