/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['raw.githubusercontent.com'],
    },
}

module.exports = nextConfig
