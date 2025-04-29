import { useSuspenseQuery } from "@tanstack/react-query"
import { notesQueryOptions } from "@/lib/data"

export default function Header() {
  const { data } = useSuspenseQuery({
    ...notesQueryOptions,
    select: (data) => data.length,
  })

  return (
    <header className="border-b p-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">Carlo's notes</h1>
        <h2>You have {data} beautiful notes.</h2>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          alert("Do something")
        }}
      >
        <button className="bg-blue-300 p-4">Create a new one</button>
      </form>
    </header>
  )
}
