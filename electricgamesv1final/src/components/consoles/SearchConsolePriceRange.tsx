import { useState, useRef } from "react";
import IConsole from "../../interfaces/IConsole";
import ConsoleItem from "./ConsoleItem";
import ConsolesService from "../../services/ConsolesService";


const SearchConsolePriceRange = () => {

  const [consoles, setConsoles] = useState<IConsole[]>([]);
  const consolePriceElementOne = useRef<HTMLInputElement>(null);
  const consolePriceElementTwo = useRef<HTMLInputElement>(null);

  const getCharacterByName = async ()  => {
          if(consolePriceElementOne.current && consolePriceElementTwo.current){
          const characterName = consolePriceElementOne.current.value;
          const characterNameT = consolePriceElementTwo.current.value;
          const consolesInPriceRange = await ConsolesService.getConsoleByPriceRange(parseInt(characterName), parseInt(characterNameT));
          setConsoles( consolesInPriceRange );
  }
  alert("console retrieved")

  }

  const showConsoles = () => {
    return (
      consoles?.map((console: { consoleName: string; consolePrice: number; consoleImage: string; },i: number) => (
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
      <section className="margin">
          <h3 className="h1">Search For Console in specified pricerange</h3>
          <div className="container">
          <div className="row">
          <div>
              <label className="col-3 col-sm-2 margin-new-game">Min price</label>
              <input className="col-6 col-sm-6 margin-new-game" ref={consolePriceElementOne} type="number"/>
          </div>
          
          <div>
              <label className="col-3 col-sm-2 margin-new-game">Max price</label>
              <input className="col-6 col-sm-6 margin-new-game" ref={consolePriceElementTwo} type="number"/>
          </div>
          <button className="margin2 button col-lg-1 col-sm-3 col-4" onClick={getCharacterByName}>Search</button>
          </div>
          </div>
          <div className="container">
          <div className="row">{showConsoles()}</div>
          </div>
      </section>
  )


}

export default SearchConsolePriceRange;