import type { Libraries } from '@/schemas/library.schema'

export const generateRouter = {
  id: 'generate-router',
  name: 'DX Generate Router',
  description: 'Next.js 프로젝트를 위한 타입 세이프한 라우트 정의 생성기',
  href: '/libraries/generate-router',
  github: 'https://github.com/hansolbangul/generate-router',
  demo: 'https://blog.hansolbangul.com/post/library-generate-router',
  sections: [
    {
      title: '개요',
      href: '/libraries/generate-router',
      content: {
        title: 'Generate Router',
        description: 'Next.js 프로젝트를 위한 타입 세이프한 라우트 정의 생성기',
        content: `
Next.js 프로젝트의 라우트 정의를 TypeScript로 자동 생성해주는 유틸리티입니다. pages(Page Router)와 app(App Router) 구조를 모두 지원하여 타입 세이프한 라우트 정의를 생성할 수 있습니다.

## 주요 기능

- Page Router와 App Router 모두 지원
- 타입 세이프한 라우트 정의 자동 생성
- next/router와 next/navigation 타입 오버라이드 지원
- Link 컴포넌트의 href prop 타입 검증
- CLI 도구 제공

## 설치 방법

\`\`\`bash
# npm
npm install generate-router

# yarn
yarn add generate-router

# pnpm
pnpm add generate-router
\`\`\`
        `,
      },
    },
    {
      title: '개발 동기',
      href: '/libraries/generate-router/motivation',
      content: {
        title: '개발 동기',
        description: 'generate-router 라이브러리를 개발하게 된 배경과 동기를 설명합니다.',
        content: `
# 개발 동기

## 관련 포스트
- [Next.js 라우팅, 이제 컴파일 타임에 안전하게 관리하세요!](https://blog.hansolbangul.com/post/library-generate-router)
- [Generate Router의 새로운 버전: 타입 안전한 라우팅의 진화](https://blog.hansolbangul.com/post/library-generate-router-1)

## Next.js 라우팅의 문제점

Next.js는 파일 시스템 기반 라우팅을 제공하여 직관적이고 편리한 라우팅 시스템을 제공합니다. 하지만 TypeScript를 사용할 때 몇 가지 제약사항이 있었습니다:

1. **타입 안전성 부재**: \`router.push()\`나 \`Link\` 컴포넌트에 잘못된 경로를 입력해도 컴파일 타임에 오류를 감지할 수 없습니다.
2. **자동완성 지원 부족**: 존재하는 라우트 경로에 대한 자동완성이 제공되지 않아 개발 생산성이 저하됩니다.
3. **리팩토링 어려움**: 라우트 경로 변경 시 해당 경로를 사용하는 모든 곳을 수동으로 수정해야 합니다.

## 해결 방안

이러한 문제점들을 해결하기 위해 generate-router를 개발하게 되었습니다:

1. **자동 타입 생성**: 프로젝트의 파일 구조를 분석하여 모든 라우트 경로에 대한 타입을 자동으로 생성합니다.
2. **타입 안전성 보장**: 잘못된 라우트 경로 사용 시 컴파일 에러를 발생시켜 런타임 오류를 방지합니다.
3. **개발자 경험 향상**: 자동완성과 타입 추론을 통해 더 나은 개발 경험을 제공합니다.

## 기대 효과

generate-router를 사용함으로써 얻을 수 있는 이점들:

- 타입 안전성 확보로 인한 버그 감소
- 자동완성 지원으로 인한 개발 생산성 향상
- 리팩토링 시 타입 시스템을 통한 안전한 변경 가능
- 문서화 없이도 사용 가능한 라우트 경로 파악
`,
      },
    },
    {
      title: 'CLI 사용법',
      href: '/libraries/generate-router/cli',
      content: {
        title: 'CLI 도구 사용하기',
        description: '커맨드 라인에서 generate-router를 사용하는 방법을 알아봅니다.',
        content: `
# CLI 도구 사용하기

generate-router는 편리한 CLI 도구를 제공합니다. 설치 후 \`generate-router\` 명령어를 사용할 수 있습니다.

## 기본 사용법

\`\`\`bash
npx generate-router ./pages ./types/routes.d.ts
\`\`\`

## 옵션

- \`<pagesDir>\`: Next.js 프로젝트의 pages 또는 app 디렉토리 경로 (필수)
- \`<outputFile>\`: 생성될 TypeScript 정의 파일 경로 (필수)
- \`-o, --override\`: Next.js 라우터 타입을 오버라이드하여 타입 세이프한 라우팅 제공 (선택, 기본값: false)

## package.json 스크립트 설정

\`\`\`json
{
  "scripts": {
    "generate:routes": "generate-router ./pages ./src/routes.d.ts --override"
  }
}
\`\`\`
        `,
      },
    },
    {
      title: '타입 오버라이드',
      href: '/libraries/generate-router/type-override',
      content: {
        title: '타입 오버라이드 사용하기',
        description:
          'Next.js의 라우터 타입을 오버라이드하여 타입 안전성을 높이는 방법을 알아봅니다.',
        content: `
# 타입 오버라이드

generate-router는 아래의 타입 생성 파일을 추출하고 Next.js의 \`useRouter\`와 \`Link\` 컴포넌트의 타입을 오버라이드하여 타입 안전성을 제공합니다.

\`\`\`typescript
type StaticPaths =
  | '/'
  | '/about';

type DynamicPaths =
  | \`/user/\${string}\`;

type RoutePath = StaticPaths | DynamicPaths | \`\${StaticPaths}?\${string}\`;

// Next.js 라우터 타입 오버라이드 (--override 옵션 사용 시)
declare module 'next/router' {
  interface UrlObject {
    pathname: RoutePath;
    query?: { [key: string]: string | number | boolean | readonly string[] | undefined };
    hash?: string;
  }

  interface NextRouter extends Omit<import('next/dist/shared/lib/router/router').NextRouter, 'push' | 'replace'> {
    push(
      url: RoutePath | UrlObject,
      as?: string | UrlObject,
      options?: TransitionOptions
    ): Promise<boolean>;
    replace(
      url: RoutePath | UrlObject,
      as?: string | UrlObject,
      options?: TransitionOptions
    ): Promise<boolean>;
  }

  export function useRouter(): NextRouter;
}

declare module 'next/navigation' {
  interface NavigationUrlObject {
    pathname: RoutePath;
    query?: { [key: string]: string | number | boolean | readonly string[] | undefined };
    hash?: string;
  }

  interface NavigationRouter extends Omit<import('next/dist/shared/lib/app-router-context.shared-runtime').AppRouterInstance, 'push' | 'replace'> {
    push(href: RoutePath | NavigationUrlObject, options?: { scroll?: boolean }): void;
    replace(href: RoutePath | NavigationUrlObject, options?: { scroll?: boolean }): void;
    query: { [key: string]: string | string[] | undefined };
  }

  export { NavigationRouter };
  export function useRouter(): NavigationRouter;
  export function usePathname(): RoutePath;
  export function useSearchParams(): URLSearchParams & {
    get(key: string): string | null;
    getAll(): { [key: string]: string | string[] };
  };
}

declare module 'next/link' {
  export interface LinkProps
    extends Omit<import('next/dist/client/link').LinkProps, 'href'> {
    href:
      | RoutePath
      | {
          pathname: RoutePath;
          query?: {
            [key: string]:
              | string
              | number
              | boolean
              | readonly string[]
              | undefined;
          };
          hash?: string;
        };
  }

  export default function Link(props: LinkProps): JSX.Element;
}
\`\`\`

## useRouter 타입 오버라이드

\`\`\`typescript
// 올바른 사용 
router.push('/about'); // 정상 작동
router.push('/user/123'); // 정상 작동

// 잘못된 사용
router.push('/invalid-path'); // 컴파일 에러
\`\`\`

## Link 컴포넌트 타입 오버라이드

\`\`\`typescript
// 올바른 사용
<Link href="/about">About</Link> // 정상 작동
<Link href="/user/123">User</Link> // 정상 작동

// 잘못된 사용
<Link href="/undefined-route">Invalid</Link> // 컴파일 에러
\`\`\`

## 쿼리 파라미터 제공

\`\`\`typescript
type RoutePath = StaticPaths | DynamicPaths | \`\${StaticPaths}?\${string}\`;
\`\`\`

위에서 생성되는 쿼리 스트링을 통해 다양한 쿼리에 대응이 가능합니다.

        `,
      },
    },
  ],
} as const satisfies Libraries['generate-router']
