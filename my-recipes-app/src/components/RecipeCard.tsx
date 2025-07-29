import Link from "next/link";

type RecipeCardProps = {
  id: number;
  title: string;
  description: string;
};

export default function RecipeCard({ id, title, description }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={`/recipe/${id}`}
        className="text-blue-600 hover:underline font-medium"
      >
        צפייה בפרטים
      </Link>
    </div>
  );
}
