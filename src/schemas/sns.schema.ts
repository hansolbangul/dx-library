import { z } from 'zod'

export const socialLinksSchema = z.object({
  github: z.string().url(),
  linkedin: z.string().url(),
  blog: z.string().url(),
  portfolio: z.string().url(),
})

export type SocialLinks = z.infer<typeof socialLinksSchema>
