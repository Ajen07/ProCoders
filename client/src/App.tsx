import Sidebar from './components/sidebar'
import Chat from './pages/Chat'
import RegisterLogin from './pages/RegisterLogin'

function App() {

  return (
    <>
      <Sidebar />
      <main className='ml-16 px-1'>
        {/* <RegisterLogin /> */}
        <Chat />
      </main>
    </>
  )
}

export default App
