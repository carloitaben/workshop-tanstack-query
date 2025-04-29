import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/$noteId")({
  component: RouteComponent,
})

function Note() {
  const data = {
    title: "TODO: this should come from the database",
    text: "TODO: this should come from the database",
  }

  return (
    <>
      <div className="mx-auto max-w-md space-y-2 p-4">
        <h4 className="text-xl font-bold">Here is your beautiful note</h4>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const text = formData.get("text")?.toString() || ""
            alert(`Do something with text: ${text}`)
          }}
        >
          <fieldset className="grid gap-4 bg-slate-300 p-4">
            <label className="grid">
              Note title
              <input name="title" defaultValue={data.title} className="p-4" />
            </label>
            <label className="grid">
              Note text
              <textarea
                name="text"
                defaultValue={data.text}
                rows={10}
                className="p-4"
              />
            </label>
          </fieldset>
          <div className="flex items-stretch justify-between">
            <button className="flex-1 bg-green-300 p-4">Update</button>
            <button className="flex-1 bg-red-300 p-4">Delete</button>
          </div>
        </form>
      </div>
    </>
  )
}

function RouteComponent() {
  return (
    <>
      <nav className="border-b p-4">
        <Link to="/">🏠 Return to home</Link>
      </nav>
      <Note />
    </>
  )
}
