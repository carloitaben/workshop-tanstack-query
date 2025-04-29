import { Outlet, createRootRouteWithContext } from "@tanstack/react-router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { QueryClient } from "@tanstack/react-query"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools />
    </>
  ),
})
