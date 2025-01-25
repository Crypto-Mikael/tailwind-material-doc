import material from 'tailwind-material';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [material({ primary: '#9f86ff' })]
} satisfies Config;
