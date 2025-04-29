import { useSuspenseQuery } from "@tanstack/react-query"
import { notesQueryOptions } from "@/lib/data"

function EmptyState() {
  return <div className="grid place-items-center p-24">No notes 💀</div>
}

export default function Notes() {
  const { data } = useSuspenseQuery(notesQueryOptions)

  return data.length ? (
    <ul className="grid grid-cols-4 gap-4 p-4">
      {data.map((note) => (
        <li
          key={note.id}
          className="grid aspect-[4/5] place-items-center bg-slate-300 text-center"
        >
          {note.title}
        </li>
      ))}
    </ul>
  ) : (
    <EmptyState />
  )
}
