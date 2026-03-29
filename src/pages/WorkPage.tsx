import { useParams } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { getWorkDetail } from '../data/mockWorkDetails'

import img1 from '../assets/data/source/mailing/images/1.png'
import img2 from '../assets/data/source/mailing/images/2.jpg'
import img3 from '../assets/data/source/mailing/images/3.png'
import img4 from '../assets/data/source/mailing/images/4.jpg'


const gallery = [img1, img2, img3, img4]

export function WorkPage() {
  const { workSlug } = useParams<{ workSlug: string }>()
  const detail = getWorkDetail(workSlug)

  const title = detail?.title ?? workSlug?.replace(/-/g, ' ') ?? 'Work'
  const description =
    detail?.description ??
    'This entry is not part of the mock catalog yet; add a matching record in the project data when you are ready. Until then you can still use the layout below as a template—swap in a longer centered intro, then wire the gallery to your own assets or CMS.'

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-center text-3xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          {description}
        </p>
      </header>

      {gallery.length > 0 ? (
        <div className="flex flex-col gap-6">
          {gallery.map((src, index) => (
            <ScrollReveal key={`${workSlug ?? 'work'}-${index}`}>
              <figure className="m-0 aspect-4/3 w-full overflow-hidden">
                <img
                  src={src}
                  alt={`${title} — image ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          No images in the gallery for this entry.
        </p>
      )}
    </article>
  )
}
