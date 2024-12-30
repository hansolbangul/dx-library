import Link from 'next/link'
import { SOCIAL_LINKS } from '@/constants/snsLinks'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ by{" "}
            <Link
              href={SOCIAL_LINKS.portfolio}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Hansol JI
            </Link>
            . The source code is available on{" "}
            <Link
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href={SOCIAL_LINKS.blog}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href={SOCIAL_LINKS.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </footer>
  )
}
