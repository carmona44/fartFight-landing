/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/quiz',
                destination: '/',
                permanent: true
            }
        ]
    },
};

module.exports = nextConfig;
