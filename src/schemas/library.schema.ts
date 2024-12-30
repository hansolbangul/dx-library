import { z } from 'zod'

export const codeExampleSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string(),
})

export const componentSchema = z.object({
  name: z.string(),
  description: z.string(),
  props: z
    .array(
      z.object({
        name: z.string(),
        type: z.string(),
        description: z.string(),
        required: z.boolean().optional(),
        default: z.string().optional(),
      }),
    )
    .optional(),
  examples: z.array(codeExampleSchema).optional(),
})
export const sectionContentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  content: z.string(),
  examples: z.array(codeExampleSchema).optional(),
  components: z.array(componentSchema).optional(),
})

export const sectionSchema = z.object({
  title: z.string(),
  href: z.string(),
  content: sectionContentSchema.optional(),
})

export const installationSchema = z.object({
  npm: z.string(),
  yarn: z.string(),
  pnpm: z.string(),
})

export const peerSchema = z.record(z.string())

export const libraryContentSchema = z.object({
  introduction: z.string(),
  installation: z.object({
    steps: z.array(z.string()),
    requirements: z.array(z.string()).optional(),
  }),
  components: z.array(componentSchema).optional(),
  usage: z.array(codeExampleSchema).optional(),
})

export const librarySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  href: z.string(),
  sections: z.array(sectionSchema),
  features: z.array(z.string()).optional(),
  installation: installationSchema.optional(),
  peer: peerSchema.optional(),
  comingSoon: z.boolean().optional(),
  content: libraryContentSchema.optional(),
})

export const librariesSchema = z.record(librarySchema)

// Type inference
export type SectionContent = z.infer<typeof sectionContentSchema>
export type Section = z.infer<typeof sectionSchema>
export type Installation = z.infer<typeof installationSchema>
export type Peer = z.infer<typeof peerSchema>
export type CodeExample = z.infer<typeof codeExampleSchema>
export type Component = z.infer<typeof componentSchema>
export type LibraryContent = z.infer<typeof libraryContentSchema>
export type Library = z.infer<typeof librarySchema>
export type Libraries = z.infer<typeof librariesSchema>
