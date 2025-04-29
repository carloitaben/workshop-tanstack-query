import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { QueryClient } from "@tanstack/react-query"
import css from "@/styles/index.css?url"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [{ rel: "stylesheet", href: css }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <ReactQueryDevtools />
        <Scripts />
      </body>
    </html>
  )
}
