import type { Libraries } from '@/schemas/library.schema'

export const notionApi = {
  id: 'notion-api',
  name: 'Notion API',
  description: 'Notion API를 활용한 라이브러리',
  href: '/libraries/notion-api',
  comingSoon: true,
  sections: [
    {
      title: '개요',
      href: '/libraries/notion-api',
      content: {
        title: 'Notion API',
        description: 'Notion API를 활용한 라이브러리',
        content: `
Notion API를 활용해 테이블 형태의 게시글을 쉽게 관리하는 라이브러리입니다.
간단한 기술 블로그나, 기록용 DB로 사용할 수 있도롭 돕는 라이브러리입니다.

## 주요 기능

- **간편한 데이터 관리**: Notion 테이블을 통해 게시글과 메타데이터를 직관적으로 관리할 수 있습니다.
- **자동 동기화**: Notion API를 통해 데이터 변경사항을 실시간으로 반영합니다.
- **커스텀 필터링**: 태그, 카테고리, 상태 등 다양한 기준으로 게시글을 필터링할 수 있습니다.
- **마크다운 지원**: Notion의 리치 텍스트를 마크다운으로 자동 변환하여 제공합니다.
- **이미지 최적화**: Notion에 업로드된 이미지를 자동으로 최적화하여 제공합니다.
- **타입 안전성**: TypeScript를 통해 데이터 구조의 타입 안전성을 보장합니다.

`,
      },
    },
  ],
} as const satisfies Libraries['notion-api']
