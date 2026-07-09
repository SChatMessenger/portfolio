import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { AlumniList } from './pages/AlumniList'
import { ContactUs } from './pages/ContactUs'
import { FaqPhd } from './pages/FaqPhd'
import { Gallery } from './pages/Gallery'
import { GroupInfo } from './pages/GroupInfo'
import { GroupMeeting } from './pages/GroupMeeting'
import { Highlights } from './pages/Highlights'
import { Home } from './pages/Home'
import { People } from './pages/People'
import { Presentations } from './pages/Presentations'
import { Publications } from './pages/Publications'
import { Research } from './pages/Research'
import { Seminars } from './pages/Seminars'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/presentation" element={<Presentations />} />
          <Route path="/people" element={<People />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/group-info" element={<GroupInfo />} />
          <Route path="/group-info/meeting" element={<GroupMeeting />} />
          <Route path="/group-info/seminars" element={<Seminars />} />
          <Route path="/group-info/alumni" element={<AlumniList />} />
          <Route path="/group-info/faq" element={<FaqPhd />} />
          <Route path="/group-info/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
