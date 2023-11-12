import { apiClient } from '@apiClient';
import { BlogPost } from './types';

export const deleteNewBlogPost = async (blog_id: number): Promise<BlogPost> => {
  const response = await apiClient.delete(`/blog/${blog_id}`);
  return response.data;
};
