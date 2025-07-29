"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../types/recipe";

type Props = {
  recipes: Recipe[];
};

export default function RecipeListPage({ recipes }: Props) {
  const [filtered, setFiltered] = useState<Recipe[]>(recipes);

  const handleSearch = (query: string) => {
    const lower = query.toLowerCase();
    const results = recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(lower) ||
        r.description.toLowerCase().includes(lower)
    );
    setFiltered(results);
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">מתכונים</h1>
      {/* <div className="p-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
        מצב כהה נבדק
      </div> */}

      <SearchBar onSearch={handleSearch} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {filtered.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500 text-lg">לא נמצאו מתכונים מתאימים</p>
        )}
      </div>
    </main>
  );
}
