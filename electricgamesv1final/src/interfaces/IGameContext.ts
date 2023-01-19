import IGame from './IGame'
import IQuiz from './IQuiz'


interface IGameContext {

    gameArray: IGame[]

    quizArray: IQuiz[]

    addGame: (game: IGame) => void;

    putGame: (game: IGame) => void;

    getGameByName: (name: string) => void;

    deleteGameById: (id: number) => void;



}

export default IGameContext;