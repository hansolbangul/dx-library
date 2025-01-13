import { librariesSchema } from '@/schemas/library.schema'
import { generateRouter } from './generate-router'
import { hooks } from './hooks'
import { modal } from './modal'

const librariesData = {
  'generate-router': generateRouter,
  modal: modal,
  hooks: hooks,
} as const

export const LIBRARIES = librariesSchema.parse(librariesData)
