import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

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
        p: ({ node, ...props }) => (
          <p className="mb-6 text-base leading-7 text-gray-700 dark:text-gray-300" {...props} />
        ),

        // 헤더 스타일링
        h1: ({ node, ...props }) => (
          <h1
            className="mt-12 mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50"
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            className="mt-10 mb-6 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50"
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            className="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50"
            {...props}
          />
        ),
        h4: ({ node, ...props }) => (
          <h4
            className="mt-6 mb-4 text-xl font-semibold text-gray-900 dark:text-gray-50"
            {...props}
          />
        ),

        // 리스트 스타일링
        ul: ({ node, ...props }) => (
          <ul
            className="mb-6 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol
            className="mb-6 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        li: ({ node, ...props }) => <li className="mb-2 text-base leading-7" {...props} />,

        // 블록쿼트 스타일링
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="mt-6 mb-6 border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-700 dark:text-gray-300"
            {...props}
          />
        ),

        // 링크 스타일링
        a: ({ node, ...props }) => (
          <a
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline underline-offset-2"
            {...props}
          />
        ),

        // 강조 텍스트 스타일링
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-gray-900 dark:text-gray-50" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="italic text-gray-800 dark:text-gray-200" {...props} />
        ),

        // 코드 블록 스타일링
        pre: ({ node, ...props }) => (
          <pre
            className="mb-6 mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 dark:bg-gray-800"
            {...props}
          />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          console.log(node, inline, className, children, props)
          const match = /language-(\w+)/.exec(className || '')
          const language = match ? match[1] : ''

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
            <code className="block font-mono text-sm text-gray-200" {...props}>
              {typeof children === 'string' ? children.trim() : children}
            </code>
          )
        },

        // 테이블 스타일링
        table: ({ node, ...props }) => (
          <div className="mb-6 overflow-x-auto">
            <table
              className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              {...props}
            />
          </div>
        ),
        thead: ({ node, ...props }) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
        th: ({ node, ...props }) => (
          <th
            className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" {...props} />
        ),

        // 수평선 스타일링
        hr: ({ node, ...props }) => (
          <hr className="my-8 border-t border-gray-200 dark:border-gray-800" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
