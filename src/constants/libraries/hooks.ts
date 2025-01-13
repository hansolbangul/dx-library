import type { Libraries } from '@/schemas/library.schema'

export const hooks = {
  id: 'hooks',
  name: 'DX Hooks',
  description: '리액트 애플리케이션을 위한 유용한 훅 모음',
  href: '/libraries/hooks',
  comingSoon: true,
  sections: [
    {
      title: '개요',
      href: '/libraries/hooks',
      content: {
        title: 'DX Hooks',
        description: '리액트 애플리케이션을 위한 유용한 훅 모음',
        content: `
DX Hooks는 리액트 애플리케이션 개발에 필요한 다양한 훅을 제공합니다.
자주 사용되는 기능들을 훅으로 제공하여 개발 생산성을 향상시킵니다.

## 주요 기능

- **상태 관리**: 복잡한 상태 관리를 단순화하는 훅
- **사이드 이펙트**: 데이터 페칭, 이벤트 핸들링 등을 위한 훅
- **성능 최적화**: 메모이제이션, 디바운싱 등을 위한 훅
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
## 시스템 요구사항

- React 16.8.0 이상

## 패키지 매니저

### npm
\`\`\`bash
npm install @dx-library/hooks
\`\`\`

### yarn
\`\`\`bash
yarn add @dx-library/hooks
\`\`\`

### pnpm
\`\`\`bash
pnpm add @dx-library/hooks
\`\`\`
`,
      },
    },
  ],
} as const satisfies Libraries['hooks']
