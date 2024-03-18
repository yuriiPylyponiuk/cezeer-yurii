import { Layout, UnitInfo } from '@/components'

export default function ItemInfo({ params }: { params: { id: number } }) {
  return (
    <Layout>
      <UnitInfo id={params.id} />
    </Layout>
  )
}
