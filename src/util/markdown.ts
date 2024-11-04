import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Metadata {
  title: string;
  subtitle: string;
  slug?: string;
  image?: string;
  category?: string;
}

interface MdxData {
  data: Metadata;
  content: string;
}

export function getMdxData(filename: string): MdxData {
  const filePath = path.join(process.cwd(), 'markdowns', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    data: data as Metadata,
    content,
  };
}
