import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import GameItem from "./GameItem";
import 'bootstrap/dist/css/bootstrap.min.css';

const GameList = () => {

    const { gameArray } = useContext(GameContext) as IGameContext;

    const getGameItems = () => {
        return gameArray.map( (games, i)  => (
            <GameItem
              key={`game-${i}`}
              id={games.id}
              gameName={games.gameName}
              gameGenre={games.gameGenre}
              gamePlatform={games.gamePlatform}
              gamePrice={games.gamePrice}
              gameReleaseYear={games.gameReleaseYear}
              gameImage={games.gameImage}
            />
         ) );
    }

    return (
        <div>
        <section className="margin">
            <h3 className="h1">Games</h3>
            <p className="text margin">Number of games: {gameArray.length}</p>
            <div className="container">
            <div className="row">{getGameItems()}</div>
            </div>
        </section>
        </div>
    )

}

export default GameList;