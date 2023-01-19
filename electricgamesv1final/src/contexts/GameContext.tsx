import { useState, createContext, FC, ReactNode, useEffect, useRef } from "react";
import IGame from "../interfaces/IGame";
import IQuiz from "../interfaces/IQuiz";
import IGameContext from "../interfaces/IGameContext";
import GameService from "../services/GameService";
import QuizService from "../services/QuizService";

export const GameContext = createContext<IGameContext | null>(null)

interface Props{
    children: ReactNode,
}

export const GameProvider : FC<Props> = ({children}) => {

  const [quizArray, setQuizArray] = useState<IQuiz[]>([]);

  const [gameArray, setGame] = useState<IGame[]>([]);

  useEffect(
    ()=>{
        getAllGames();
        getAllQuiz();
    }, [gameArray.length]
  )

  const getAllGames = async() => {
    const allGamesFromDb = await GameService.getAllGames();
    setGame(allGamesFromDb);
  }

  const getGameById = async(id: number) => {
    var game = await GameService.getGameById(id); 
  }

  const getGameByName = async(name: string) => {
    const getGameByName = await GameService.getGameByName(name);
  }

  const getAllQuiz = async() => {
    const getAllFromQuiz = await QuizService.getAllQuizes();
    setQuizArray(getAllFromQuiz);
  }

  const addGame = async (game: IGame) => {
    setGame( [ game, ...gameArray ] );
    await GameService.postGame(game);
  }

  const putGame = async (game: IGame) => {
    setGame( [game, ...gameArray] );
    await GameService.putGame(game)
  }

  const deleteGameById = async (id: number) => {
    await GameService.deleteGame(id);
    const newGameArray = gameArray.filter(game => game.id !== id);
    setGame(newGameArray);
  }

  return(
    <GameContext.Provider value={{gameArray, quizArray, addGame, putGame, getGameByName, deleteGameById}}>
        {children}
    </GameContext.Provider>
  )
}