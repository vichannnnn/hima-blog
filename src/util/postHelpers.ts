import path from 'path';
import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';

export interface BlogPostMetadata {
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  category: string;
  date: Date;
}

export const getListOfPosts = () => {
  const folder = path.join(process.cwd(), 'src/markdowns');
  const files = fs.readdirSync(folder);
  return files.filter((file) => file.endsWith('.mdx'));
};

export const getPostContent = (slug: string): { data: BlogPostMetadata; content: string } => {
  const file = path.join(process.cwd(), 'src/markdowns', slug) + '.mdx';
  const content = fs.readFileSync(file, 'utf8');
  const grayMatterResult: GrayMatterFile<string> = matter(content);

  const data = grayMatterResult.data as BlogPostMetadata;
  const markdownContent = grayMatterResult.content;

  return { data, content: markdownContent };
};
