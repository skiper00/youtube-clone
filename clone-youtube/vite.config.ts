import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import vuetify from 'vite-plugin-vuetify';
import { SocksProxyAgent } from 'socks-proxy-agent'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const proxyAgent = new SocksProxyAgent('socks5://210.79.142.73:8080');

	return {
		plugins: [vue(), tailwindcss(), vuetify({ autoImport: true })],
		define: {
			'process.env': env,
		},
		resolve: {
			alias: {
				'@app': path.resolve(__dirname, './app'),
				'@entities': path.resolve(__dirname, './entities'),
				'@features': path.resolve(__dirname, './features'),
				'@pages': path.resolve(__dirname, './pages'),
				'@shared': path.resolve(__dirname, './shared'),
				'@widgets': path.resolve(__dirname, './widgets'),
			},
		},
		server: {
			proxy: {
				'/api/youtube': {
					target: 'https://www.googleapis.com',
					changeOrigin: true,
					secure: false,
					rewrite: (path) => path.replace(/^\/api\/youtube/, '/youtube'),
					configure: (proxy) => {
						proxy.on('proxyReq', (proxyReq) => {
							(proxyReq as any).agent = proxyAgent
						});
						proxy.on('proxyRes', (proxyRes, req) => {
							console.log('Proxy response:', req.url, proxyRes.statusCode);
						});

						proxy.on('error', (err, req) => {
							console.error('Proxy error:', err, req.url);
						});
					}
				},
			}
		}
	};
});
