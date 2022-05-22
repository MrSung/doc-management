import type { FC } from 'react'
import type { GetServerSideProps } from 'next'

import { Home } from '@/components/pages/home'

const IndexPage: FC = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch('http://localhost:3000/api/feed')
  // const feed = await res.json()
  const feed = {
    title: 'Next.js Doc Management',
  }

  return {
    props: { feed },
  }
}

export default IndexPage
