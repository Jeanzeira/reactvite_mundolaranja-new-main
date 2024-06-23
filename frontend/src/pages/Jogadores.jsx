import Navbar from "../components/Navbar"
import SearchJog from "../components/jogadores/SearchJog"
import JogContent from "../components/jogadores/JogContent"

const Main = () => {
    return (
      <div className="min-h-screen bg-gray-950">
          <Navbar/>
          <JogContent/>
        
      </div>
    )
  }
  
  export default Main