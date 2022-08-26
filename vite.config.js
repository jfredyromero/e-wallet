import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [
		eslint({
			lintOnStart: true,
			include: ['**/*.js', '**/*.ts', '**/*.html'],
			fix: true,
		}),
	],
});
