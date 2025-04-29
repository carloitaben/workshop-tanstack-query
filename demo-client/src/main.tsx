import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { routeTree } from "./routeTree.gen"
import "./styles/index.css"

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: false,
  scrollRestoration: true,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("app")

if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}
