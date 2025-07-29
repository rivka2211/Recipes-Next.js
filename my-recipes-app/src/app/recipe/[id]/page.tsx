// import { get } from "http";
// import { Recipe } from "../../../types/recipe";
// import { getRecipeById } from "../../../../lib/contentful";
// import { log } from "console";

// type RecipePageProps = {
//   params: { id: string };
// };

// export default async function RecipePage({ params }: RecipePageProps) {

//   // const res = await fetch(`http://localhost:3000/api/recipe/${params.id}`, {
//   //   cache: "no-store",
//   // });
//   const recipe=await getRecipeById(parseInt(params.id, 10));

//   if (recipe === null) {
//     return (
//       <main className="min-h-screen p-6 flex flex-col items-center justify-center bg-red-50">
//         <h1 className="text-3xl font-bold text-red-600 mb-4">404 - מתכון לא נמצא</h1>
//         <p className="text-gray-700">המתכון שביקשת לא קיים במערכת.</p>
//       </main>
//     );
//   }
//   console.log(recipe);
  
//   const ingredients = recipe.ingredients || [];
//   const steps = recipe.steps || [];
//   return (
//     <main className="min-h-screen p-6 bg-white max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4 text-green-700">{recipe.title}</h1>
//       <p className="text-gray-700 mb-6">{recipe.description}</p>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">מצרכים</h2>
//         <ul className="list-disc list-inside space-y-1">
//           {ingredients.map((item, index) => (
//             <li key={index} className="text-gray-600">{item}</li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">אופן ההכנה</h2>
//         <ol className="list-decimal list-inside space-y-1">
//           {steps.map((step, index) => (
//             <li key={index} className="text-gray-600">{step}</li>
//           ))}
//         </ol>
//       </section>
//     </main>
//   );
// }


import { Recipe } from "../../../types/recipe";
import { getRecipeById } from "../../../../lib/contentful";

type RecipePageProps = {
  params: { id: string };
};

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipeById(parseInt(params.id, 10));

  if (recipe === null) {
    return (
      <main className="min-h-screen p-6 flex flex-col items-center justify-center bg-red-50">
        <h1 className="text-3xl font-bold text-red-600 mb-4">404 - מתכון לא נמצא</h1>
        <p className="text-gray-700">המתכון שביקשת לא קיים במערכת.</p>
      </main>
    );
  }

  const ingredients = recipe.ingredients || [];
  const steps = recipe.steps || [];

  return (
    <main className="min-h-screen p-6 bg-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-green-700">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.description}</p>

      {recipe.image && (
        <div className="mb-6">
          <img
            src={recipe.image.url}
            alt={recipe.image.description || recipe.image.title || recipe.title}
            className="w-full rounded-lg shadow-md"
          />
          {(recipe.image.title || recipe.image.description) && (
            <div className="text-sm text-gray-500 mt-2">
              {recipe.image.title && <p><strong>כותרת:</strong> {recipe.image.title}</p>}
              {recipe.image.description && <p><strong>תיאור:</strong> {recipe.image.description}</p>}
            </div>
          )}
        </div>
      )}

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">מצרכים</h2>
        <ul className="list-disc list-inside space-y-1">
          {ingredients.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">אופן ההכנה</h2>
        <ol className="list-decimal list-inside space-y-1">
          {steps.map((step, index) => (
            <li key={index} className="text-gray-600">{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
