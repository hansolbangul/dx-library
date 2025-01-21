import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LIBRARIES } from '@/constants/libraries'
import { Markdown } from '@/features/libraries/components/markdown'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const library = LIBRARIES[resolvedParams.id as keyof typeof LIBRARIES]

  if (!library) {
    return {
      title: 'Library Not Found',
    }
  }

  const section = library.sections.find((s) => s.href === `/libraries/${resolvedParams.id}/state`)

  if (!section || !section.content) {
    return {
      title: 'State Not Found',
    }
  }

  return {
    title: `${section.content.title} - ${library.name}`,
    description: section.content.description,
  }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  const library = LIBRARIES[resolvedParams.id as keyof typeof LIBRARIES]
  if (!library || library.comingSoon) {
    notFound()
  }

  const section = library.sections.find((s) => s.href === `/libraries/${resolvedParams.id}/state`)
  if (!section || !section.content) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">{section.content.title}</h1>
        {section.content.description && (
          <p className="text-lg text-muted-foreground">{section.content.description}</p>
        )}
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown content={section.content.content} />
      </div>

      {section.content.components?.map((component, index) => (
        <div key={index} className="space-y-6 rounded-lg border p-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">{component.name}</h2>
            <p className="text-muted-foreground">{component.description}</p>
          </div>

          {component.props && component.props.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Arguments</h3>
              <div className="grid gap-4">
                {component.props.map((prop, propIndex) => (
                  <div key={propIndex} className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <code className="rounded bg-muted px-2 py-1">{prop.name}</code>
                      <span className="text-sm text-muted-foreground">{prop.type}</span>
                      {prop.required && (
                        <span className="text-sm text-red-500">Required</span>
                      )}
                    </div>
                    {prop.description && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {prop.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {component.returns && (
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Returns</h3>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{component.returns.type}</span>
                </div>
                {component.returns.description && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {component.returns.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
