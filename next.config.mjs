/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'ecom.thirstymart.in'],
    },
    async rewrites() {
        return [
            {
                source: '/api/products/all',  // Your frontend request path
                destination: 'http://ecom.thirstymart.in/api/products/all',  // HTTP API being proxied
            },
        ];
    },
};

export default nextConfig;