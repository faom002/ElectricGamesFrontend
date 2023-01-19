import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { allPages } from "./pages";
import "./css/Test.css"
import "./css/dropdown.css"

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="body">
          <header>
          <div className="h1_div" id="background">
            <h1 className="h1">ElectricGames</h1>
            </div>
            <div>
            <article className="dropdown">
                <button className="dropbtn">MyGames</button>
                <div className="dropdown-content">
            <nav>
              <ol className="ol">
                <li className="list"><Link to="/">Quiz</Link></li>
                <li><Link to="/game-dashboard">Game DashBoard</Link></li>
                <li><Link to="/game-update">Game Update</Link></li>
                <li><Link to="/game-search">Game Search</Link></li>
                <li><Link to="/game-delete">Game Delete</Link></li>
              </ol>
            </nav>
            </div>
            </article>
            
            <article className="dropdown">
                <button className="dropbtn">MyCharacters</button>
                <div className="dropdown-content">
            <nav>
              <ol className="ol">
                <li className="list"><Link to="/">Quiz</Link></li>
                <li><Link to="/character-see-all-and-add">Character DashBoard</Link></li>
                <li><Link to="/character-update">Character Update</Link></li>
                <li><Link to="/character-search">Character Search</Link></li>
                <li><Link to="/character-delete">Character Delete</Link></li>
              </ol>
            </nav>
            </div>
            </article>
            
            <article className="dropdown">
                <button className="dropbtn">MyConsoles</button>
                <div className="dropdown-content">
            <nav>
              <ol className="ol">
                <li className="list"><Link to="/">Quiz</Link></li>
                <li><Link to="/console-see-all-and-add">Console DashBoard</Link></li>
                <li><Link to="/console-update">Console Update</Link></li>
                <li><Link to="/console-search-name">Console Search by name</Link></li>
                <li><Link to="/console-search-price">Console Search by price</Link></li>
                <li><Link to="/console-delete">Console Delete</Link></li>
              </ol>
            </nav>
            </div>
            </article>
            </div>
          </header>

          <main>
              <Routes>
                <Route path="/" element={<allPages.HomePage/>}></Route>
                <Route path="/game-dashboard" element={<allPages.DashBoard/>}></Route>
                <Route path="/game-update" element={<allPages.UpdateGamePage/>}></Route>
                <Route path="/game-search" element={<allPages.ShowGameByNamePage/>}></Route>
                <Route path="/game-delete" element={<allPages.DeleteGamePage/>}></Route>
                <Route path="/" element={<allPages.HomePage/>}></Route>
                <Route path="/character-see-all-and-add" element={<allPages.AddAndSeeAllCharacterPage/>}></Route>
                <Route path="/character-update" element={<allPages.UpdateCharacterPage/>}></Route>
                <Route path="/character-search" element={<allPages.ShowCharacterByNamePage/>}></Route>
                <Route path="/character-delete" element={<allPages.DeleteCharacterPage/>}></Route>
                <Route path="/" element={<allPages.HomePage/>}></Route>
                <Route path="/console-see-all-and-add" element={<allPages.AddAndSeeAllConsolesPage/>}></Route>
                <Route path="/console-update" element={<allPages.UpdateConsolePage/>}></Route>
                <Route path="/console-search-name" element={<allPages.ShowConsoleByNamePage/>}></Route>
                <Route path="/console-search-price" element={<allPages.ShowConsoleByPriceRangePage/>}></Route>
                <Route path="/console-delete" element={<allPages.DeleteConsolePage/>}></Route>
              </Routes>
            
          </main>
          </div>
      
      </BrowserRouter>

    
    </>
  );
}

export default App;