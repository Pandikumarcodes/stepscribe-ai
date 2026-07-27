import { pathToFileURL } from 'node:url'
import type { Server } from 'node:http'
import { app } from './app.js'
import { env } from './config/env.js'

export function startServer(): Server {
  return app.listen(env.PORT, () => {
    console.log(`StepScribe AI backend listening on port ${env.PORT}`)
  })
}

const isMainModule =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(process.argv[1]).href

if (isMainModule) {
  startServer()
}
