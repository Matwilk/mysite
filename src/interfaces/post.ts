import { type PostType } from "./postType";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  postType: PostType;
  excerpt: string;
  ogImage: {
    url: string;
  };
  gallery: string[];
  content: string;
  preview?: boolean;
};
