import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { crosswind } from 'lightningcss-plugin-crosswind';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), Icons({ compiler: 'svelte' })
	],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			...crosswind
		}
	},
	build: {
		cssMinify: 'lightningcss'
	}
});
