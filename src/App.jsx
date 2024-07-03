import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"

function App() {

  return (
    <main>
    <div className="nav-shop">
      <Navbar />
      <Shop />
    </div>
    <Cart />
  </main>
  )
}

export default App
