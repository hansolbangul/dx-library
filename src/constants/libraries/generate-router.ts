import type { Libraries } from '@/schemas/library.schema'

export const generateRouter = {
  id: 'generate-router',
  name: 'DX Generate Router',
  description: 'Next.js 프로젝트를 위한 타입 세이프한 라우트 정의 생성기',
  href: '/libraries/generate-router',
  github: 'https://github.com/codeui/generate-router',
  demo: 'https://generate-router-demo.codeui.dev',
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

generate-router는 Next.js의 \`useRouter\`와 \`Link\` 컴포넌트의 타입을 오버라이드하여 타입 안전성을 제공합니다.

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

## 동적 라우트 지원

\`\`\`typescript
type DynamicPaths =
  | \`/user/\${string}\`
  | \`/post/\${string}/comments\`;

// 사용 예시
router.push(\`/user/\${userId}\`); // 정상 작동
router.push(\`/post/\${postId}/comments\`); // 정상 작동
\`\`\`
        `,
      },
    },
    {
      title: '고급 사용법',
      href: '/libraries/generate-router/advanced',
      content: {
        title: '고급 사용법',
        description: 'generate-router의 고급 기능과 사용법을 알아봅니다.',
        content: `
# 고급 사용법

## 커스텀 설정

\`generate-router.config.js\` 파일을 생성하여 동작을 커스터마이즈할 수 있습니다.

\`\`\`javascript
module.exports = {
  // 특정 파일/폴더 제외
  exclude: ['**/api/**', '**/_*.tsx'],
  
  // 커스텀 타입 정의
  typeOverrides: {
    '/user/[id]': '/user/:id',
  },
  
  // 추가 타입 선언
  additionalTypes: \`
    type QueryParams = {
      sort?: 'asc' | 'desc';
      page?: number;
    };
  \`,
}
\`\`\`

## 모노레포 지원

여러 Next.js 프로젝트가 있는 모노레포에서도 사용할 수 있습니다.

\`\`\`bash
# 각 프로젝트별로 라우트 생성
generate-router ./packages/web/pages ./packages/web/types/routes.d.ts
generate-router ./packages/admin/pages ./packages/admin/types/routes.d.ts
\`\`\`

## CI/CD 통합

GitHub Actions 워크플로우 예시:

\`\`\`yaml
name: Generate Routes
on:
  push:
    paths:
      - 'pages/**'
      - 'app/**'

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run generate:routes
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "chore: update route types"
\`\`\`
        `,
      },
    },
  ],
} as const satisfies Libraries['generate-router']
