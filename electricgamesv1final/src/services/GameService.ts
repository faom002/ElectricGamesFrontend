import axios from 'axios';
import IGame from '../interfaces/IGame';

const GameService = (
  () => {

    const gameEndpoints = {
      games: "https://localhost:7226/Game",
      gameByName: "https://localhost:7226/Game/GetByName?nameFromDb"
    }

    const getAllGames = async () => {
      const result = await axios.get(gameEndpoints.games);
      console.log(result.data);
      return result.data;
    }

    const getGameById = async(id: number) => {
      const result = await axios.get(`${gameEndpoints.games}/${id}`);
      return result.data;
    }

    const getGameByName = async(name: string) => {
      const result = await axios.get(`${gameEndpoints.gameByName}=${name}`);
      return result.data;
    }

    const postGame = async (g: IGame) => {
        const result = await axios.post(gameEndpoints.games, g);
        console.log(result);
        
    }

    const putGame = async (g: IGame) => {
      const result = await axios.put(gameEndpoints.games, g);
      return result.data;
    }

    const deleteGame = async (id: number) => {
      const result = await axios.delete(`${gameEndpoints.games}/${id}`)
      console.log(result);
      return result;
    }

    return {
      getAllGames,
      getGameByName,
      getGameById,
      postGame,
      putGame,
      deleteGame
    }

  }
)();

export default GameService;