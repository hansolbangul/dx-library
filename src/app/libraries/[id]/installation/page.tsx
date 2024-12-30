import { notFound } from 'next/navigation'
import { LIBRARIES } from '@/constants/libraries'
import { Markdown } from '@/features/libraries/components/markdown'

interface PageProps {
  params: {
    id: string
  }
}

export default async function InstallationPage({ params }: PageProps) {
  const id = (await params).id
  const library = LIBRARIES[id as keyof typeof LIBRARIES]
  console.log('library', library)
  if (!library || library.comingSoon) {
    notFound()
  }

  const section = library.sections.find((s) => s.href === `/libraries/${id}/installation`)
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

      {library.installation && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Package Managers</h2>
          <div className="grid gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">npm</span>
              </div>
              <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                <code className="text-sm">{library.installation.npm}</code>
              </pre>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">yarn</span>
              </div>
              <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                <code className="text-sm">{library.installation.yarn}</code>
              </pre>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">pnpm</span>
              </div>
              <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                <code className="text-sm">{library.installation.pnpm}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {library.peer && Object.keys(library.peer).length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Peer Dependencies</h2>
          <div className="rounded-lg border">
            <div className="grid divide-y">
              {Object.entries(library.peer).map(([name, version]) => (
                <div key={name} className="flex items-center justify-between p-4">
                  <code className="text-sm">{name}</code>
                  <span className="text-sm text-muted-foreground">{version}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
