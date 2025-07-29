import { NextResponse } from "next/server";
import recipes from "../../../../data/recipes.json";
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const recipeId = Number(context.params.id);
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
  }

  return NextResponse.json(recipe);
}
