/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'transparent': 'transparent',
			azulOscuro: '#030712',
			azulClaro: '#0E3A7A',
			bordes: '#1c1f27',
			verde: '#2ed198',
			textos: '#A1A1A1',
			white: '#ffffff',
			black: '#000000',
		},
		extend: {},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
