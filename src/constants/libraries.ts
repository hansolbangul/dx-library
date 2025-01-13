import { librariesSchema, type Libraries } from '@/schemas/library.schema'

export const LIBRARIES = librariesSchema.parse({
  'generate-router': {
    id: 'generate-router',
    name: 'DX generate-router',
    description: 'Next.js 애플리케이션을 위한 타입 안전한 라우트 자동 생성 도구',
    href: '/libraries/generate-router',
    sections: [
      {
        title: '개요',
        href: '/libraries/generate-router',
        content: {
          title: 'DX generate-router',
          description: 'Next.js 애플리케이션을 위한 타입 안전한 라우트 자동 생성 도구',
          content: `
DX generate-router는 Next.js 애플리케이션에서 타입 안전한 라우트를 자동으로 생성하는 강력한 도구입니다.
라우트 관리를 단순화하고 애플리케이션 전체에서 일관성을 보장합니다.

## 주요 기능

- **타입 안전성**: TypeScript와 완벽하게 통합되어 컴파일 타임에 라우트 오류를 잡아냅니다.
- **자동 생성**: 파일 시스템 기반 라우팅을 분석하여 자동으로 라우트를 생성합니다.
- **개발자 경험**: 직관적인 API로 라우트 관리의 복잡성을 줄입니다.
`,
        },
      },
      {
        title: '설치',
        href: '/libraries/generate-router/installation',
        content: {
          title: '설치',
          description: 'DX generate-router 시작하기',
          content: `
## 시스템 요구사항

- Node.js 16.0.0 이상
- Next.js 13.0.0 이상

## 패키지 매니저

### npm
\`\`\`bash
npm install @dx-library/generate-router
\`\`\`

### yarn
\`\`\`bash
yarn add @dx-library/generate-router
\`\`\`

### pnpm
\`\`\`bash
pnpm add @dx-library/generate-router
\`\`\`
`,
        },
      },
      {
        title: '사용법',
        href: '/libraries/generate-router/usage',
        content: {
          title: '사용법',
          description: 'DX generate-router 사용 방법 알아보기',
          content: `
DX generate-router를 사용하여 타입 안전한 라우트를 생성하는 방법을 알아보겠습니다.

## 기본 사용법

\`\`\`typescript
// next.config.js
const { withGenerateRouter } = require('@dx/generate-router')

module.exports = withGenerateRouter({
  // 설정 옵션
})
\`\`\`

## 고급 설정

\`\`\`typescript
// next.config.js
const { withGenerateRouter } = require('@dx/generate-router')

module.exports = withGenerateRouter({
  routerOptions: {
    baseDir: 'src/pages',
    output: 'src/routes.ts',
    prettier: true
  }
})
\`\`\`
`,
        },
      },
    ],
    features: ['Generate routes for Next.js applications'],
    installation: {
      npm: 'npm install @dx/generate-router',
      yarn: 'yarn add @dx/generate-router',
      pnpm: 'pnpm add @dx/generate-router',
    },
    peer: {
      next: '>=13.0.0',
      react: '>=18.0.0',
      'react-dom': '>=18.0.0',
    },
  },
  ui: {
    id: 'ui',
    name: 'DX UI',
    description: '접근성과 커스터마이징을 고려한 현대적인 React 컴포넌트 라이브러리',
    href: '/libraries/ui',
    sections: [
      {
        title: '개요',
        href: '/libraries/ui',
        content: {
          title: 'DX UI 컴포넌트',
          description: '접근성과 커스터마이징을 고려한 현대적인 React 컴포넌트 라이브러리',
          content: `
DX UI는 Radix UI 프리미티브를 기반으로 구축된 현대적인 React 컴포넌트 라이브러리입니다.
아름답고 기능적인 컴포넌트들을 제공합니다.

## 특징

- **접근성**: ARIA 표준을 준수하여 모든 사용자가 접근 가능
- **커스터마이징**: Tailwind CSS를 통한 쉬운 스타일 커스터마이징
- **다크 모드**: 기본적으로 다크 모드 지원
- **타입 안전성**: TypeScript로 작성되어 완벽한 타입 지원
`,
        },
      },
      {
        title: '설치',
        href: '/libraries/ui/installation',
        content: {
          title: '설치',
          description: 'DX UI 시작하기',
          content: `
프로젝트에 DX UI를 설치하고 설정하는 방법을 알아보겠습니다.

## 전제 조건

- Node.js 16.0.0 이상
- React 18.0.0 이상
- Tailwind CSS 3.0.0 이상

## 설정

1. 패키지 설치
2. Tailwind CSS 설정 추가
3. 테마 설정 (선택사항)
`,
        },
      },
      {
        title: '컴포넌트',
        href: '/libraries/ui/components',
        content: {
          title: '컴포넌트',
          description: '사용 가능한 UI 컴포넌트 목록',
          content: '모든 컴포넌트는 접근성과 사용자 경험을 고려하여 설계되었습니다.',
          components: [
            {
              name: 'Button',
              description: '다양한 스타일과 상태를 지원하는 버튼 컴포넌트',
              props: [
                {
                  name: 'variant',
                  type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
                  description: '버튼의 시각적 스타일을 결정합니다',
                  required: false,
                  default: 'default',
                },
                {
                  name: 'size',
                  type: '"default" | "sm" | "lg" | "icon"',
                  description: '버튼의 크기를 결정합니다',
                  required: false,
                  default: 'default',
                },
              ],
              examples: [
                {
                  title: '기본 사용법',
                  description: '기본적인 버튼 사용 예시',
                  code: `<Button>클릭하세요</Button>`,
                },
                {
                  title: '변형',
                  description: '다양한 버튼 스타일',
                  code: `
<Button variant="default">기본</Button>
<Button variant="destructive">삭제</Button>
<Button variant="outline">윤곽선</Button>
                  `,
                },
              ],
            },
          ],
        },
      },
    ],
    features: [
      'Pre-built components',
      'Fully customizable',
      'Dark mode support',
      'Accessibility focused',
      'TypeScript ready',
    ],
    installation: {
      npm: 'npm install @dx/ui',
      yarn: 'yarn add @dx/ui',
      pnpm: 'pnpm add @dx/ui',
    },
    peer: {
      react: '>=18.0.0',
      'react-dom': '>=18.0.0',
      tailwindcss: '>=3.0.0',
    },
  },
  hooks: {
    id: 'hooks',
    name: 'DX Hooks',
    description: '애플리케이션에서 자주 사용되는 패턴을 관리하는 React 훅 모음',
    href: '/libraries/hooks',
    sections: [
      {
        title: '개요',
        href: '/libraries/hooks',
        content: {
          title: 'DX Hooks',
          description: '애플리케이션에서 자주 사용되는 패턴을 관리하는 React 훅 모음',
          content: `
DX Hooks는 React 애플리케이션에서 자주 사용되는 패턴을 관리하는 훅 컬렉션을 제공합니다.
상태 관리부터 브라우저 API까지, 이 훅들은 React 개발을 더욱 효율적으로 만들어줍니다.

## 특징

- **타입 안전성**: TypeScript로 작성된 완벽한 타입 지원
- **성능 최적화**: 불필요한 리렌더링 방지
- **사용 편의성**: 직관적인 API 설계
- **테스트 완료**: 철저한 테스트로 신뢰성 보장
`,
        },
      },
      {
        title: '설치',
        href: '/libraries/hooks/installation',
        content: {
          title: '설치',
          description: 'DX Hooks 시작하기',
          content: `
DX Hooks를 프로젝트에 설치하고 사용하는 방법을 알아보겠습니다.

## 시스템 요구사항

- React 18.0.0 이상
- TypeScript 4.5.0 이상 (권장)
`,
        },
      },
      {
        title: '상태 관리',
        href: '/libraries/hooks/state',
        content: {
          title: '상태 관리 훅',
          description: 'React 애플리케이션의 상태를 관리하는 훅',
          content: '로컬 상태와 영구 상태를 관리하는 훅들을 제공합니다.',
          components: [
            {
              name: 'useLocalStorage',
              description: 'localStorage와 동기화되는 상태를 관리하는 훅',
              props: [
                {
                  name: 'key',
                  type: 'string',
                  description: 'localStorage에 저장될 키',
                  required: true,
                },
                {
                  name: 'initialValue',
                  type: 'T',
                  description: '초기값',
                  required: true,
                },
              ],
              examples: [
                {
                  title: '기본 사용법',
                  description: '테마 설정 저장하기',
                  code: `
const [theme, setTheme] = useLocalStorage('theme', 'light')

// 테마 변경
setTheme('dark')
                  `,
                },
              ],
            },
          ],
        },
      },
    ],
    features: [
      'State management',
      'Side effects',
      'Browser APIs',
      'Performance optimizations',
      'TypeScript support',
    ],
    installation: {
      npm: 'npm install @dx/hooks',
      yarn: 'yarn add @dx/hooks',
      pnpm: 'pnpm add @dx/hooks',
    },
    peer: {
      react: '>=18.0.0',
    },
  },
  forms: {
    id: 'forms',
    name: 'DX Forms',
    description: 'Form handling and validation made easy',
    href: '/libraries/forms',
    sections: [
      { title: '개요', href: '/libraries/forms' },
      { title: '설치', href: '/libraries/forms/installation' },
      { title: '기본 사용법', href: '/libraries/forms/basic-usage' },
      { title: '검증', href: '/libraries/forms/validation' },
      { title: '고급 사용법', href: '/libraries/forms/advanced-usage' },
    ],
    comingSoon: true,
  },
  query: {
    id: 'query',
    name: 'DX Query',
    description: 'Powerful data fetching and caching',
    href: '/libraries/query',
    sections: [
      { title: '개요', href: '/libraries/query' },
      { title: '설치', href: '/libraries/query/installation' },
      { title: '쿼리', href: '/libraries/query/queries' },
      { title: '데이터 모달', href: '/libraries/query/mutations' },
      { title: '쓰레딩', href: '/libraries/query/caching' },
    ],
    comingSoon: true,
  },
  state: {
    id: 'state',
    name: 'DX State',
    description: 'Simple and scalable state management',
    href: '/libraries/state',
    sections: [
      { title: '개요', href: '/libraries/state' },
      { title: '설치', href: '/libraries/state/installation' },
      { title: '스토타입', href: '/libraries/state/store' },
      { title: '아케션', href: '/libraries/state/actions' },
      { title: '미드웨어', href: '/libraries/state/middleware' },
    ],
    comingSoon: true,
  },
}) satisfies Libraries
