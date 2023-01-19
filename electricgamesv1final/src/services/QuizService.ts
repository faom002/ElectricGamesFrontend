import axios from 'axios';

const QuizService = (
  () => {

    const quizEndpoint = "https://localhost:7226/quiz"
    

    const getAllQuizes = async () => {
      const result = await axios.get(quizEndpoint);
      console.log(result.data);
      return result.data;
    }



    return {
      getAllQuizes
    }

  }
)();

export default QuizService;