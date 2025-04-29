import { createFileRoute } from "@tanstack/react-router"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Notes from "@/components/Notes"

export const Route = createFileRoute("/")({
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
