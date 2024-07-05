import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import pathPrefix from "./pathPrefix";

const postsDirectory = join(process.cwd(), "_posts");

const prefix = pathPrefix();

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const isPages = process.env.GITHUB_PAGES === 'true'

  console.log('getPostBySlug isPages', isPages);
  
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post = { ...data, slug: realSlug, content } as Post;

  const postStr = JSON.stringify(post);
  const postStrWithPrefixes = postStr.replaceAll(/\/assets/gi, prefix + '/assets')
  console.log('post', postStrWithPrefixes);
  return JSON.parse(postStrWithPrefixes);
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
