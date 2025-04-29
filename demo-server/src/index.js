import { serve } from "@hono/node-server"
import { cors } from "hono/cors"
import { Hono } from "hono"

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// This is where notes will be stored. We have some set as the default.
let notes = {
  "54efa9eb-dbdd-4d43-87a3-3d2818018d7c": {
    title: "Mi first note",
    text: "Ah, the blank page! A canvas for my deepest thoughts and wildest dreams… or just a place to write down my grocery list and random musings about the meaning of life. Spoiler alert: I still haven’t figured it out. But with TanStack managing my data like a pro, at least I can pretend I’m organized while I flounder in confusion. This note is where I’ll attempt to channel my inner genius, but let’s be real—it’ll probably just end up filled with doodles of cats and existential dread.",
  },
  "1ca4055d-c0da-438e-b7da-a18f3bb9edab": {
    title: "Another note",
    text: "Welcome to the abyss of my thoughts! Here lies a collection of ideas that are as fleeting as my will to get out of bed in the morning. If you’re looking for inspiration, you might want to check under the couch cushions instead. I’ve heard that’s where all the good ideas hide—right next to the lost socks and my will to adult. So grab a snack, sit back, and enjoy the chaotic beauty of my inner monologue. Or don’t. It’s really up to you.",
  },
  "b158de27-7857-4564-abf2-1b010c873377": {
    title: "Third note",
    text: "This note is a time capsule of my most profound thoughts—or at least, that’s what I tell myself to feel better about the nonsense that spills out. Thanks to TanStack, my notes are neatly organized, even if my brain is a chaotic mess. Here you’ll find a delightful mix of brilliant ideas that never quite made it to fruition and random ruminations that are best left unexamined. If you’ve ever wondered what it’s like to live in my head, congratulations! You’ve found the key to the madness. Just remember to keep your hands and feet inside at all times; it’s a bumpy ride!",
  },
  "a511a9db-8d33-453c-9b6d-7f6d7673d3d0": {
    title: "And another one",
    text: "",
  },
}

// Hono is like to Express but typesafe, runtime agnostic and with extra goodies.
const app = new Hono()

// This is a Hono middleware.
// We use it to configure cors.
app.use("*", (c, next) => {
  const corsMiddleware = cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["Origin", "Content-Type", "Authorization"],
    allowMethods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
    credentials: true,
  })

  return corsMiddleware(c, next)
})

// Another Hono middleware. This one adds an artificial delay to requests.
app.use(async (_, next) => {
  console.log(`⏳ Adding artificial delay`)
  await wait(3000)
  await next()
})

// Another middleware. This one causes some responses to fail randomly,
// like any backend written in JavaScript would.
// app.use(async (c, next) => {
//   if (Math.random() < 0.1) {
//     console.log("🚨 Simulating error")
//     return c.text(
//       "This is a backend written in JavaScript. Some responses fail randomly for no apparent reason.",
//       500
//     )
//   }

//   return next()
// })

// And another one. This one logs the requests.
app.use("*", (c, next) => {
  console.log("🎯", new Date().toISOString(), c.req.method, c.req.path)
  return next()
})

app
  .get("/notes", (c) => {
    const entries = Object.entries(notes)
    const array = entries.map(([id, note]) => ({ id, title: note.title }))
    return c.json(array)
  })
  .post("/notes", async (c) => {
    const body = await c.req.json()

    const id = body?.id || crypto.randomUUID()

    const note = {
      title: body?.title || "New note",
      text: body?.text,
    }

    notes[id] = note

    return c.json({ id, ...note }, 200)
  })

app
  .get("/notes/:id", (c) => {
    const id = c.req.param("id")
    const note = notes[id]

    if (!note) {
      return c.text("Note not found", 404)
    }

    return c.json(note)
  })
  .delete((c) => {
    const id = c.req.param("id")
    const exists = id in notes

    if (!exists) {
      return c.text("Note not found", 404)
    }

    delete notes[id]

    return c.text(id, 200)
  })
  .patch(async (c) => {
    const id = c.req.param("id")
    const exists = id in notes

    if (!exists) {
      return c.text("Note not found", 404)
    }

    const body = await c.req.json()

    notes[id] = body

    return c.text("Updated note", 200)
  })

serve({
  fetch: app.fetch,
  port: 8000,
})

console.log("👂 Listening on port http://localhost:8000")
