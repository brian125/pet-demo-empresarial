import {useEffect} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPublic from '../../components/public/QuestionsPublic';

const QuestionsPagePublic = () => {
    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)


    useEffect(()=>{
      dispatch(loadAllQuestion())
    },[])
  
    
    return (
        <div className='contenedor2 question-table'>
            <h2 className='sub-pregunta'>¡Preguntas Hechas!</h2>
            {error&& <h1>{error}</h1>}
            {questions && questions.map((question)=>{
                return(
                    <QuestionPublic key={question.id} question={question}/>
                )
            })}
            
        </div>
    )
}

export default QuestionsPagePublic
