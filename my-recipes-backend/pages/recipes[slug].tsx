import { client } from '../../datocms';
import Image from 'next/image';

export async function getStaticPaths() {
  const data = await client.request(`{ allRecipes { slug } }`);
  return {
    paths: data.allRecipes.map(r => ({ params: { slug: r.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const QUERY = `query RecipeBySlug($slug: String) {
    recipe(filter: {slug: {eq: $slug}}) {
      title
      description
      ingredients
      steps
      image { url }
    }
  }`;
  const data = await client.request(QUERY, { slug: params.slug });
  return { props: { recipe: data.recipe } };
}

export default function RecipePage({ recipe }) {
  return (
    <article className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <Image
        src={recipe.image.url}
        alt={recipe.title}
        width={800}
        height={500}
        className="rounded-lg mb-6"
      />
      <p className="mb-4">{recipe.description}</p>
      <h2 className="text-2xl mt-6 mb-2">מרכיבים</h2>
      <ul className="list-disc pr-6 mb-6">
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <h2 className="text-2xl mt-6 mb-2">הוראות הכנה</h2>
      <ol className="list-decimal pr-6 space-y-2">
        {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </article>
  );
}
