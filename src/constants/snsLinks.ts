import { socialLinksSchema, type SocialLinks } from '@/schemas/sns.schema'

export const SOCIAL_LINKS = socialLinksSchema.parse({
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  blog: "https://yourblog.com",
  portfolio: "https://yourportfolio.com"
}) satisfies SocialLinks