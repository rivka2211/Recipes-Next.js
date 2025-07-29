
import { createClient } from 'contentful';
import { Recipe } from '../src/types/recipe';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

function extractImage(imageField: any): Recipe["image"] | undefined {
  if (!imageField?.fields?.file?.url) return undefined;

  return {
    url: 'https:' + imageField.fields.file.url,
    title: imageField.fields.title,
    description: imageField.fields.description,
  };
}

export async function getAllRecipes(): Promise<Recipe[]> {
  const entries = await client.getEntries({ content_type: 'recipe' });

  return entries.items.map((entry, index) => {
    const fields = entry.fields as any;

    return {
      id: fields.id ?? index + 1,
      title: fields.title,
      description: fields.description,
      ingredients: fields.ingredients,
      steps: fields.steps,
      image: extractImage(fields.image),
    };
  });
}

export async function getRecipeById(id: number): Promise<Recipe | null> {
  const entries = await client.getEntries({
    content_type: 'recipe',
    'fields.id': id,
    limit: 1,
  });

  const entry = entries.items[0];
  if (!entry) return null;

  const fields = entry.fields as any;

  return {
    id: fields.id ,
    title: fields.title,
    description: fields.description,
    ingredients: fields.ingredients,
    steps: fields.steps,
    image: extractImage(fields.image),
  };
}
