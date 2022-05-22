import type { FC } from 'react'
import type { GetServerSideProps } from 'next'

const IndexPage: FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
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
