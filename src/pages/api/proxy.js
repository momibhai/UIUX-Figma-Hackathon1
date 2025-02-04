import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false, // Disable bodyParser for proxy to work
  },
};

export default createProxyMiddleware({
  target: 'https://template1-neon-nu.vercel.app',
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '/api/products', // Rewrite /api/proxy to /api/products
  },
});
