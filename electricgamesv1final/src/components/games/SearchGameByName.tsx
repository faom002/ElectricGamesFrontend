import { useState, useRef } from "react";
import IGame from "../../interfaces/IGame";
import GameItem from "./GameItem";
import GameService from "../../services/GameService";


const SearchGameByName = () => {

  const [game, setGame] = useState<IGame[]>([]);
  const gameElement = useRef<HTMLInputElement>(null);

  const getGame = async ()  => {
          if(gameElement.current){
          const gamesElement = gameElement.current.value;
          const chosenGame =  await GameService.getGameByName(gamesElement);
          setGame( chosenGame );
  }
  alert("Retrieved game success")

  }


  const showGame = () => {
    return (
      game?.map((game: { gameName: string; gameGenre: string; gamePlatform: string; gamePrice: number; gameReleaseYear: number; gameImage: string; },i: number) => (
        <GameItem 
        key={`game-${i}`}
        gameName={game.gameName}
        gameGenre={game.gameGenre}
        gamePlatform={game.gamePlatform}
        gamePrice={game.gamePrice}
        gameReleaseYear={game.gameReleaseYear}
        gameImage={game.gameImage}
  />  
      ))
    
    )
  }  


  return (
      <section className="update-game-container margin">
          <h3 className="h1">Search For Game</h3>
          <div className="container">
            <div className="row">
          <div>
              <label className="col-3 col-sm-2 margin-new-game">Game Name</label>
              <input className="col-6 col-sm-6 margin-new-game" ref={gameElement} type="text"/>
          </div>
          <button className="col-lg-1 col-sm-3 col-4 button margin2" onClick={getGame}>Search</button>
          </div>
          </div>
          <div className="container">
          <div className="row">{showGame()}</div>
          </div>
      </section>
  )


}

export default SearchGameByName;