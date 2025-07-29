import React from 'react'
import { client } from '../datocms';
import Link from 'next/link';

export async function getStaticProps() {
  const QUERY = `{
    allRecipes {
      id
      slug
      title
      ingredients
    }
  }`;
  const data = await client.request(QUERY);
  return { props: { recipes: data.allRecipes }, revalidate: 60 };
}

export default function Home({ recipes }) {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">מתכונים</h1>
      <ul className="space-y-4">
        {recipes.map(r => (
          <li key={r.id}>
            <Link href={`/recipes/${r.slug}`}>
              <a className="text-blue-600 hover:underline">{r.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
