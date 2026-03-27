import { NavLink, Outlet, useMatch } from 'react-router-dom'

const minimalLink =
  ({ isActive }: { isActive: boolean }) =>
    [
      'text-sm transition-colors',
      isActive
        ? 'text-zinc-900 dark:text-zinc-50'
        : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200',
    ].join(' ')

const backToHomeLinkClass =
  'inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200'

export function RootLayout() {
  const workSubpageMatch = useMatch({ path: '/works/:workSlug', end: true })

  return (
    <div className="flex min-h-dvh flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="shrink-0">
        <div className="mx-auto max-w-[1200px] px-6 pb-4 pt-8 text-center">
          <NavLink
            to="/"
            end
            className="text-base font-medium uppercase tracking-[0.35em] text-zinc-900 dark:text-zinc-50 sm:text-lg"
          >
            urszula turewicz
          </NavLink>
        </div>
      </header>
      <nav
        className="sticky top-0 z-10 w-full shrink-0 bg-white/80 py-4 backdrop-blur dark:bg-zinc-950"
        aria-label="Main"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <NavLink to="/" end className={minimalLink}>
              Works
            </NavLink>
            <NavLink to="/about" className={minimalLink}>
              About
            </NavLink>
            <NavLink to="/contact" className={minimalLink}>
              Contact
            </NavLink>
          </div>
          {workSubpageMatch ? (
            <div className="mt-4 flex w-full justify-start self-stretch border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
              <NavLink to="/" className={backToHomeLinkClass}>
                <span className="nav-chevron-left" aria-hidden />
                Back to home
              </NavLink>
            </div>
          ) : null}
        </div>
      </nav>
      <main className="mx-auto w-full max-w-[1200px] flex-1">
        <Outlet />
      </main>
    </div>
  )
}
