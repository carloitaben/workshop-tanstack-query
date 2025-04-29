import { queryOptions } from "@tanstack/react-query"

const API_URL = "http://localhost:8000"

type Note = {
  id: string
  title: string
  text: string
}

export const notesQueryOptions = queryOptions({
  queryKey: ["notes"],
  async queryFn({ signal }) {
    const url = new URL("/notes", API_URL)
    const response = await fetch(url, {
      method: "get",
    })

    if (!response.ok) {
      throw Error(`Error fetching ${url.href}: ${response.statusText}`, {
        cause: response,
      })
    }

    const data = await response.json()
    return data as Note[]
  },
})
