import Sidebar from './components/sidebar'
import Mentors from './pages/Mentors'

function App() {

  return (
    <>
      <Sidebar />
      <main className='ml-16 px-1'>
        <Mentors/>
      </main>
    </>
  )
}

export default App
