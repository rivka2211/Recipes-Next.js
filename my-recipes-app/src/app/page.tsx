import RecipeCard from "../components/RecipeCard";
import RecipeListPage from "../components/RecipeListPage";
import { Recipe } from "../types/recipe";
import { getAllRecipes } from '../../lib/contentful';

export default async function Home() {
  const recipes: Recipe[] = await getAllRecipes();
  return (
    <RecipeListPage recipes={recipes} />
  );
}


