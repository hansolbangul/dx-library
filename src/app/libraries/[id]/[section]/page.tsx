import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LIBRARIES } from '@/constants/libraries'
import { Markdown } from '@/features/libraries/components/markdown'

type Props = {
  params: Promise<{ id: string; section: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const library = LIBRARIES[resolvedParams.id as keyof typeof LIBRARIES]

  if (!library) {
    return {
      title: 'Section Not Found',
    }
  }

  const sectionData = library.sections.find(
    (s) => s.href === `/libraries/${resolvedParams.id}/${resolvedParams.section}`,
  )

  if (!sectionData || !sectionData.content) {
    return {
      title: 'Section Not Found',
    }
  }

  return {
    title: `${sectionData.content.title} - ${library.name}`,
    description: sectionData.content.description,
  }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  const library = LIBRARIES[resolvedParams.id as keyof typeof LIBRARIES]

  if (!library) {
    notFound()
  }

  const sectionData = library.sections.find(
    (s) => s.href === `/libraries/${resolvedParams.id}/${resolvedParams.section}`,
  )

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
