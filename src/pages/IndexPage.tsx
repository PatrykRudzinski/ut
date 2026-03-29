import { HomePageCard } from '../components/HomePageCard'
import { MOCK_HOME_WORKS } from '../data/mockHomeWorks'
import { HOME_PAGE_CARD_PALETTE } from '../theme/homePageCardPalette'

import imgUrl from '../assets/data/source/mailing/images/cover.jpg'


export function IndexPage() {
  return (
    <div className="w-full space-y-8 px-[2px]">
      <ul className="grid w-full list-none grid-cols-2 gap-[2px] p-0 min-[780px]:grid-cols-3">
        {[MOCK_HOME_WORKS[0], MOCK_HOME_WORKS[1]].map((work, index) => (
          <li key={work.workSlug}>
            <HomePageCard
              work={work}
              color={HOME_PAGE_CARD_PALETTE[index % HOME_PAGE_CARD_PALETTE.length]}
            />
          </li>
        ))}
        <li>
          <HomePageCard
            work={{
              workSlug: 'mailing',
              title: 'Mailing',
              imageUrl: imgUrl,
            }}
            color={HOME_PAGE_CARD_PALETTE[2 % HOME_PAGE_CARD_PALETTE.length]}
          />
        </li>

        {[MOCK_HOME_WORKS[3], MOCK_HOME_WORKS[4]].map((work, index) => (
          <li key={work.workSlug}>
            <HomePageCard
              work={work}
              color={HOME_PAGE_CARD_PALETTE[index % HOME_PAGE_CARD_PALETTE.length]}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
