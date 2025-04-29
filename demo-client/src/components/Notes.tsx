import { Link } from "@tanstack/react-router"

type Note = {
  id: string
  title: string
  text: string
}

function EmptyState() {
  return <div className="grid place-items-center p-24">No notes 💀</div>
}

export default function Notes() {
  // TODO: fetch these
  const data: Note[] = []

  return data.length ? (
    <ul className="grid grid-cols-4 gap-4 p-4">
      {data.map((note) => (
        <li key={note.id}>
          <Link
            to="/$noteId"
            params={{ noteId: note.id }}
            className="grid aspect-[4/5] place-items-center bg-slate-300 text-center"
          >
            {note.title}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <EmptyState />
  )
}
