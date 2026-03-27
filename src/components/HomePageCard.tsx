import { Link } from 'react-router-dom'
import type { HomeWorkItem } from '../data/mockHomeWorks'

type HomePageCardProps = {
  work: HomeWorkItem
}

export function HomePageCard({ work }: HomePageCardProps) {
  const { workSlug, title, imageUrl } = work

  return (
    <Link
      to={`/works/${workSlug}`}
      aria-label={`View work: ${title}`}
      className="group relative block aspect-square overflow-hidden border border-zinc-200 bg-zinc-100 shadow-sm outline-none ring-violet-500/30 transition-shadow hover:shadow-md focus-visible:ring-2 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-out group-hover:opacity-0 group-focus-within:opacity-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="presentation"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 p-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-zinc-900">
        <span className="text-center text-lg font-semibold tracking-tight text-white sm:text-xl">
          {title}
        </span>
      </div>
    </Link>
  )
}
