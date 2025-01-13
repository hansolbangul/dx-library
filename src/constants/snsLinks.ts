import { socialLinksSchema, type SocialLinks } from '@/schemas/sns.schema'

export const SOCIAL_LINKS = socialLinksSchema.parse({
  github: 'https://github.com/hansolbangul',
  linkedin: 'https://www.linkedin.com/in/hansolbangul/',
  blog: 'https://blog.hansolbangul.com/',
  portfolio: 'https://profile.hansolbangul.com/',
}) satisfies SocialLinks
