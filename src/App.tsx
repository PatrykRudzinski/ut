import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { IndexPage } from './pages/IndexPage'
import { WorkPage } from './pages/WorkPage'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="works/:workSlug" element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
