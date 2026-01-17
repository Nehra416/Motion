import AnimateText from "./components/animateText"
import AnimationSequences from "./components/animation-sequences"
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
      {/* <div>
        <Navbar />
        <div className="pt-16 pb-10 bg-gray-100">
          <LayoutCards />
        </div>
      </div> */}
      <div className="flex items-center justify-center min-h-screen bg-black w-full text-white">
        {/* <AnimateText /> */}
        <AnimationSequences />
      </div>
    </div>
  )
}

export default App
