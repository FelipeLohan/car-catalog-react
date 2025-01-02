import { Catalog } from "./components/Catalog"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { UserComments } from "./components/UserComments"


function App() {
 
  return (
    <>
      <Header/>
      <Catalog/>
      <UserComments/>
      <Footer/>
    </>
  )
}

export default App
