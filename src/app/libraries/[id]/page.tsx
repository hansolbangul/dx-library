import { notFound } from 'next/navigation'
import { LIBRARIES } from '@/constants/libraries'
import { Markdown } from '@/features/libraries/components/markdown'

interface PageProps {
  params: {
    id: string
  }
}

export default async function LibraryPage({ params }: PageProps) {
  const id = (await params).id
  const library = LIBRARIES[id as keyof typeof LIBRARIES]
  if (!library) {
    notFound()
  }

  const introSection = library.sections.find((s) => s.href === '/libraries/' + id)
  if (!introSection || !introSection.content) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-center md:text-left">
              {introSection.content.title}
            </h1>
            {library.comingSoon && (
              <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground self-center md:self-auto">
                Coming soon
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            {library.github && (
              <a
                href={library.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-accent px-3 py-2 text-sm font-medium hover:bg-accent/80"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            )}
            {library.demo && (
              <a
                href={library.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Demo
              </a>
            )}
          </div>
        </div>
        {introSection.content.description && (
          <p className="text-lg text-muted-foreground">{introSection.content.description}</p>
        )}
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown content={introSection.content.content} />
      </div>
    </div>
  )
}
