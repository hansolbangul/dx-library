import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import cn from 'classnames'
import 'highlight.js/styles/github-dark.css' // 구문 강조 스타일 추가

interface MarkdownProps {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      className="markdown-content text-base leading-relaxed"
      components={{
        // 기본 paragraph에 더 큰 마진과 라인 하이트 적용
        p: ({ ...props }) => (
          <p className="mb-6 text-base leading-7 text-gray-700 dark:text-gray-300" {...props} />
        ),

        // 헤더 스타일링
        h1: ({ ...props }) => (
          <h1
            className="mt-12 mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50"
            {...props}
          />
        ),
        h2: ({ ...props }) => (
          <h2
            className="mt-10 mb-6 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50"
            {...props}
          />
        ),
        h3: ({ ...props }) => (
          <h3
            className="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50"
            {...props}
          />
        ),
        h4: ({ ...props }) => (
          <h4
            className="mt-6 mb-4 text-xl font-semibold text-gray-900 dark:text-gray-50"
            {...props}
          />
        ),

        // 리스트 스타일링
        ul: ({ ...props }) => (
          <ul
            className="mb-6 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        ol: ({ ...props }) => (
          <ol
            className="mb-6 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        li: ({ ...props }) => <li className="mb-2 text-base leading-7" {...props} />,

        // 블록쿼트 스타일링
        blockquote: ({ ...props }) => (
          <blockquote
            className="mt-6 mb-6 border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-700 dark:text-gray-300"
            {...props}
          />
        ),

        // 링크 스타일링
        a: ({ ...props }) => (
          <a
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline underline-offset-2"
            {...props}
          />
        ),

        // 강조 텍스트 스타일링
        strong: ({ ...props }) => (
          <strong className="font-semibold text-gray-900 dark:text-gray-50" {...props} />
        ),
        em: ({ ...props }) => <em className="italic text-gray-800 dark:text-gray-200" {...props} />,

        // 코드 블록 스타일링
        pre: ({ ...props }) => (
          <pre className="relative mb-6 mt-4 overflow-x-auto rounded-lg p-4 dark:bg-gray-900">
            <div className="absolute right-4 top-4 text-xs text-gray-400">
              {props.children?.props?.className?.replace('language-', '') || ''}
            </div>
            {props.children}
          </pre>
        ),
        code: ({ className, children, ...props }) => {
          return !className ? (
            // 인라인 코드
            <code
              className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-200"
              {...props}
            >
              {children}
            </code>
          ) : (
            // 코드 블록
            <code className={cn('block font-mono text-sm')} {...props}>
              {typeof children === 'string' ? children.trim() : children}
            </code>
          )
        },

        // 테이블 스타일링
        table: ({ ...props }) => (
          <div className="mb-6 overflow-x-auto">
            <table
              className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              {...props}
            />
          </div>
        ),
        thead: ({ ...props }) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
        th: ({ ...props }) => (
          <th
            className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
            {...props}
          />
        ),
        td: ({ ...props }) => (
          <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" {...props} />
        ),

        // 수평선 스타일링
        hr: ({ ...props }) => (
          <hr className="my-8 border-t border-gray-200 dark:border-gray-800" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
