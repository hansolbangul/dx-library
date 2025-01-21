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
React-Portal과, Vanilla-JS를 활용해 Pub-Sub 패턴을 활용하여 모달 컴포넌트를 제공합니다.

## 주요 기능

- **React Portal 기반 렌더링**: DOM 계층구조와 독립적으로 모달을 렌더링하여 z-index 관리와 스타일 충돌을 방지합니다.
- **Pub-Sub 이벤트 시스템**: Vanilla-JS로 구현된 이벤트 시스템으로 컴포넌트 간 결합도를 낮추고 상태 관리를 중앙화합니다.
- **선언적 API**: 직관적인 인터페이스로 모달 상태를 쉽게 관리하고 커스텀 컴포넌트를 지원합니다.
- **성능 최적화**: 불필요한 리렌더링을 방지하고 동적인 모달 생성/제거를 효율적으로 처리합니다.

`,
      },
    },
  ],
} as const satisfies Libraries['modal']
