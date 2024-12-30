import { notFound } from 'next/navigation'
import { LIBRARIES } from '@/constants/libraries'
import { Markdown } from '@/features/libraries/components/markdown'

interface PageProps {
  params: {
    id: string
  }
}

export default async function StatePage({ params }: PageProps) {
  const id = (await params).id
  const library = LIBRARIES[id as keyof typeof LIBRARIES]
  if (!library || library.comingSoon) {
    notFound()
  }

  const section = library.sections.find((s) => s.href === `/libraries/${id}/state`)
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
                        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{prop.description}</p>
                    {prop.default && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        Default: <code className="text-xs">{prop.default}</code>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {component.examples && component.examples.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Examples</h3>
              <div className="grid gap-6">
                {component.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="space-y-2">
                    <h4 className="text-lg font-medium">{example.title}</h4>
                    <p className="text-muted-foreground">{example.description}</p>
                    <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                      <code className="text-sm">{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {section.content.examples?.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
          <div className="grid gap-6">
            {section.content.examples.map((example, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-medium">{example.title}</h3>
                <p className="text-muted-foreground">{example.description}</p>
                <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                  <code className="text-sm">{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
