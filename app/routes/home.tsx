import type { Route } from "./+types/home"

export function meta(): ReturnType<Route.MetaFunction> {
	return [
		{ title: "QuizHub" },
		{
			name: "description",
			content: "QuizHub - Interactive Quiz Platform",
		},
	]
}

export default function Home() {
	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1 className="text-3xl font-bold mb-4">Welcome to QuizHub!</h1>
			<p className="text-lg text-gray-700 dark:text-gray-300">
				Let&apos;s start building engaging quizzes.
			</p>
		</main>
	)
}
