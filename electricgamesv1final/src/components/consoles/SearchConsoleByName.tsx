import { useState, useRef } from "react";
import IConsole from "../../interfaces/IConsole";
import ConsoleItem from "./ConsoleItem";
import ConsolesService from "../../services/ConsolesService";


const SearchConsoleByName = () => {

  const [console, setConsole] = useState<IConsole[]>([]);
  const consoleNameElement = useRef<HTMLInputElement>(null);

  const getConsoleByName = async ()  => {
          if(consoleNameElement.current){
          const consoleName = consoleNameElement.current.value;
          const chosenConsole =  await ConsolesService.getConsoleByName(consoleName);
          setConsole( chosenConsole );
  }
  alert("Console retrieved")

  }

const showConsole = () => {
  return (
    console?.map((console: { consoleName: string; consolePrice: number; consoleImage: string; },i: number) => (
      <ConsoleItem 
      key={`character-${i}`}
      consoleName={console.consoleName}
      consolePrice={console.consolePrice}
      consoleImage={console.consoleImage}
/>  
    ))
  
  )
} 


  return (
      <section className="margin update-game-container">
          <h3 className="h1">Search For Console By Name</h3>
          <div className="container">
          <div className="row">
          <div>
              <label className="col-3 col-sm-2 margin-new-game">Console Name</label>
              <input className="col-6 col-sm-6  margin-new-game" ref={consoleNameElement} type="text"/>
          </div>
          <button className="margin2 button col-lg-1 col-sm-3 col-4" onClick={getConsoleByName}>Search</button>
          </div>
          </div>
          <div className="container">
          <div className="row">{showConsole()}</div>
          </div>
          
      </section>
  )


}

export default SearchConsoleByName;