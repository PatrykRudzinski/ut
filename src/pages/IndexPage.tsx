import { HomePageCard } from '../components/HomePageCard'
import { MOCK_HOME_WORKS } from '../data/mockHomeWorks'

export function IndexPage() {
  return (
    <div className="w-full space-y-8">

      <ul className="grid w-full list-none grid-cols-2 gap-px p-0 min-[780px]:grid-cols-3">
        {MOCK_HOME_WORKS.map((work) => (
          <li key={work.workSlug}>
            <HomePageCard work={work} />
          </li>
        ))}
      </ul>
    </div>
  )
}
