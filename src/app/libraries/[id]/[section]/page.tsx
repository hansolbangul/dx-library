import { notFound } from 'next/navigation'
import { LIBRARIES } from '@/constants/libraries'
import { Markdown } from '@/features/libraries/components/markdown'

interface PageProps {
  params: {
    id: string
    section: string
  }
}

export default async function SectionPage({ params }: PageProps) {
  const { id, section } = params
  const library = LIBRARIES[id as keyof typeof LIBRARIES]

  if (!library) {
    notFound()
  }

  const sectionData = library.sections.find((s) => s.href === `/libraries/${id}/${section}`)

  if (!sectionData || !sectionData.content) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">{sectionData.content.title}</h1>
          {library.comingSoon && (
            <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
              Coming soon
            </span>
          )}
        </div>
        {sectionData.content.description && (
          <p className="text-lg text-muted-foreground">{sectionData.content.description}</p>
        )}
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown content={sectionData.content.content} />
      </div>
    </div>
  )
}
