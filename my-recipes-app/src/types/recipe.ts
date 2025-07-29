export type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image?: {
    url: string;
    title?: string;
    description?: string;
  };
  categories?: string[];
  publishDate?: string;
};
