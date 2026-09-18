import { Iauthor } from './iauthor';

export interface Ipost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: Iauthor;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}
