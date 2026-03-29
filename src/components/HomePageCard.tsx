import { Link } from 'react-router-dom'
import type { HomeWorkItem } from '../data/mockHomeWorks'
import { getContrastingTextColor } from '../theme/homePageCardPalette'

export type HomePageCardProps = {
  work: HomeWorkItem
  /** Background color for the title layer (e.g. from `HOME_PAGE_CARD_PALETTE`) */
  color: string
  /** Optional title color; defaults to a contrasting color vs `color` */
  textColor?: string
}

export function HomePageCard({
  work,
  color,
  textColor: textColorProp,
}: HomePageCardProps) {
  const { workSlug, title, imageUrl } = work
  const titleColor = textColorProp ?? getContrastingTextColor(color)

  return (
    <Link
      to={`/works/${workSlug}`}
      aria-label={`View work: ${title}`}
      className="group relative block aspect-square overflow-hidden shadow-sm outline-none ring-violet-500/30 transition-shadow hover:shadow-md focus-visible:ring-2"
      style={{ backgroundColor: color }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-out group-hover:opacity-0 group-focus-within:opacity-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="presentation"
      />
      <div
        className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
        style={{ backgroundColor: color }}
      >
        <span
          className="text-center text-2xl font-semibold tracking-tight sm:text-4xl"
          style={{ color: titleColor }}
        >
          {title}
        </span>
      </div>
    </Link>
  )
}
