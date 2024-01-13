/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:path(.{1,})', // this will redirect any other paths to `/`
                destination: '/',
                permanent: true
            },
            {
                source: '/404',
                destination: '/',
                permanent: true
            }
        ]
    },
};

module.exports = nextConfig;
