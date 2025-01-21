import { librariesSchema } from '@/schemas/library.schema'
import { generateRouter } from './generate-router'
// import { hooks } from './hooks'
import { modal } from './modal'
import { notionApi } from './notion-api'

const librariesData = {
  'generate-router': generateRouter,
  modal: modal,
  //   hooks: hooks,
  'notion-api': notionApi,
} as const

export const LIBRARIES = librariesSchema.parse(librariesData)
