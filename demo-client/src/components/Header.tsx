export default function Header() {
  return (
    <header className="border-b p-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">Carlo's notes</h1>
        <h2>You have ??? beautiful notes.</h2>
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
