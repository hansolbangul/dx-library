import { Metadata } from 'next'
import { LIBRARIES } from '@/constants/libraries'
import ClientLayout from './client-layout'

interface Props {
  children: React.ReactNode
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const library = LIBRARIES[params.id as keyof typeof LIBRARIES]

  if (!library) {
    return {
      title: 'Library Not Found',
      description: 'The requested library could not be found.',
    }
  }

  return {
    title: `${library.name} - DX Library`,
    description: library.description,
    openGraph: {
      title: library.name,
      description: library.description,
      type: 'article',
      url: `https://dx-library.hansolbangul.com/libraries/${params.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: library.name,
      description: library.description,
    },
  }
}

export default function LibraryLayout({ children, params }: Props) {
  const library = LIBRARIES[params.id as keyof typeof LIBRARIES]

  if (!library) return null

  return <ClientLayout>{children}</ClientLayout>
}
