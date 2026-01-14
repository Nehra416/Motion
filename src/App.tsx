import Btn from "./components/btn"
import Card from "./components/card"
import Sidebar from "./components/sidebar"

function App() {

  return (
    <div>
      {/* <Btn /> */}
      <div className="flex bg-neutral-100">
        <Sidebar />
        <Card />
      </div>
    </div>
  )
}

export default App
