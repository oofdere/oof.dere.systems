import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), Icons({ compiler: 'svelte' })
	],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			visitor: {
				Token: {
					dimension(token) {
						if (token.unit === 'tw') {
							return {
								raw: `${token.value * 0.25}rem`
							}
						}
					}
				}
			}
		}
	},
	build: {
		cssMinify: 'lightningcss'
	}
});
