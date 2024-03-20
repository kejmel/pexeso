import './App.css'
import Pexeso from './components/Pexeso'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
    <div className="w-full">
      <div className="relative shadow-xl px-4 py-8 h-full overflow-hidden mt-5 rounded-2xl flex flex-col justify-center items-center">
        <Welcome />
      </div>
      </div>
      <div className="w-1/2 flex justify-center mx-auto mt-10">
      <div className="grid gap-4 grid-cols-4">
        <Pexeso />
      </div>
    </div>
    </>
  )
}

export default App
