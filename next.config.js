/**
 * @type {import('next').NextConfig}
 */
const isPages = process.env.GITHUB_PAGES === 'true'

console.log('isPages', isPages);

const nextConfig = {
  output: 'export',
  basePath: isPages ? '/mysite' : '',
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',

  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig 
