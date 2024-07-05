/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV == 'production'

console.log('ODE_ENV', process.env.NODE_ENV);

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/mysite' : '',
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',

  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig