import type { Libraries } from '@/schemas/library.schema'

export const modal = {
  id: 'modal',
  name: 'DX Modal',
  description: '접근성과 사용성이 뛰어난 모달 컴포넌트',
  href: '/libraries/modal',
  comingSoon: true,
  sections: [
    {
      title: '개요',
      href: '/libraries/modal',
      content: {
        title: 'DX Modal',
        description: '접근성과 사용성이 뛰어난 모달 컴포넌트',
        content: `
DX Modal은 React 애플리케이션을 위한 접근성 중심의 모달 컴포넌트입니다.
WAI-ARIA 가이드라인을 준수하며, 키보드 네비게이션과 스크린 리더 지원을 포함합니다.

## 주요 기능

- **접근성**: WAI-ARIA 가이드라인 준수
- **키보드 지원**: 완벽한 키보드 네비게이션
- **커스터마이징**: 유연한 스타일링과 애니메이션
`,
      },
    },
  ],
} as const satisfies Libraries['modal']
