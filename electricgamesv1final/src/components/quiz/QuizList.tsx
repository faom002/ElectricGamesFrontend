
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import IQuiz from "../../interfaces/IQuiz";
import QuizItem from "./QuizItem";

const QuizList = () => {

    const { quizArray } = useContext(GameContext) as IGameContext;

    const getQuizItems = () => {
        return quizArray.map( (quiz, i) => (
            <QuizItem
              key={`quiz-${i}`}
                answerOne={quiz.answerOne}
                answerTwo={quiz.answerTwo}
                answerThree={quiz.answerThree}
                answerFour={quiz.answerFour}
                correctAnswer={quiz.correctAnswer}
                id={quiz.id}
                question={quiz.question}
            />
        ) );
    }

    return (
        <section className="margin">
            <h3 className="h1">Quiz game</h3>
            <section className="text row">
                { getQuizItems()}
            </section>            
        </section>
    )
}

export default QuizList;