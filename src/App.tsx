import Btn from "./components/btn"
import Card from "./components/card"
import LayoutCards from "./components/layoutCards"
import MovingComponent from "./components/movingComponent"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"

function App() {

  return (
    <div>
      {/* <Btn /> */}
      {/* <Card /> */}
      {/* <div className="flex bg-neutral-100">
        <Sidebar />
        <Card />
      </div> */}
      {/* <MovingComponent /> */}
      <div>
        <Navbar />
        <div className="pt-16 pb-10 bg-gray-100">
          <LayoutCards />
        </div>
      </div>
    </div>
  )
}

export default App
