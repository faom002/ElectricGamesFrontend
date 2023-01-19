import { FC, useState, ChangeEvent,useRef } from "react";
import IQuiz from "../../interfaces/IQuiz";
import "../../css/Quiz.css";

const QuizItem: FC<IQuiz> = ({
  id,
  answerFour,
  answerOne,
  answerThree,
  answerTwo,
  correctAnswer,
  question,
}) => {
  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  const [showCorrectAnswer, setCorrectAnswer] = useState<Boolean>(false);



  const quizQuestion = (isCorrect:string) => {
    if( isCorrect == correctAnswer ){
      setCorrectAnswer(true)
  }else
  {
    alert("wrong")
  }
  }

  return (
    
    
    <div className="App col-xl-6 col-md-12 quiz-margin">

      {showAnswer ? (
        <div className="final-results">
          <h1>Final results</h1>
          <h2>1 out of 5 correct</h2>
          <button className="button">Restart game</button>
        </div>
      ) : (
        <div className="question-card">
            <h2 className="h1">Question : {id} out of 5 </h2>
          <h3 className="text question-text games-h1">
             {question}
          </h3>

          
            <p onClick={ (e) => e.currentTarget.addEventListener("click", () => quizQuestion(answerOne)) }   className=" li"> {answerOne}</p>
            <p onClick={ (e) => e.currentTarget.addEventListener("click", () => quizQuestion(answerTwo))}   className=" li">{answerTwo}</p>
            <p onClick={(e) => e.currentTarget.addEventListener("click", () => quizQuestion(answerThree))}    className=" li">{answerThree}</p>
            <p onClick={ (e) => e.currentTarget.addEventListener("click", () => quizQuestion(answerFour))}    className=" li">{answerFour}</p>
          
          { showCorrectAnswer && (<p className="h1">Correct answer: {correctAnswer} </p>)}
        </div>
      )}
    </div>

    
  );
};

export default QuizItem;
