import { createFileRoute } from "@tanstack/react-router"
import { notesQueryOptions } from "@/lib/data"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Notes from "@/components/Notes"

export const Route = createFileRoute("/")({
  async loader({ context }) {
    await context.queryClient.ensureQueryData(notesQueryOptions)
  },
  component: Home,
})

function Home() {
  return (
    <>
      <Header />
      <Notes />
      <Footer />
    </>
  )
}
