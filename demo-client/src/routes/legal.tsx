import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/legal")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <nav className="border-b p-4">
        <Link to="/">🏠 Return to home</Link>
      </nav>
      <main className="mx-auto max-w-lg p-4">
        <h4 className="text-xl font-bold">Legal gibberish</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit ut eveniet facere cupiditate nihil repellendus itaque.
          Sint officia, eveniet quasi qui nostrum vitae amet soluta laboriosam
          deleniti dignissimos, animi quisquam!
        </p>
      </main>
    </>
  )
}
