
export default function pathPrefix() {
  const isPages = process.env.GITHUB_PAGES === 'true';
  return isPages ? '/mysite' : '';
}
