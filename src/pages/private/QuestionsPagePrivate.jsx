import {useEffect, useState} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPrivate from '../../components/private/QuestionsPrivate';

const QuestionsPagePrivate = () => {
    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)


    useEffect(()=>{
      dispatch(loadAllQuestion())
    },[])  

    const [ filtro, setFiltro ] = useState("");
    
    return (
        <div className='contenedor2'>
            <div className='busqueda'>
            <img className='ico-1' src="/outline_search_black_24dp.png" alt="" />
            <input
                className="panel-busqueda"
                placeholder="Buscar preguntas"
                type="text"
                onChange={(e) => setFiltro(e.target.value.toUpperCase())}
            ></input>
            </div>

            <h2 className='sub-pregunta'>Preguntas</h2>
            {error&& <h1>{error}</h1>}
            {questions && 
            questions.filter(
                busqueda => busqueda.category.includes(filtro) || busqueda.type.includes(filtro))
                .map((question)=>{
                return(
                    <QuestionPrivate key={question.id} question={question}/>
                )
               
            })}
        </div>
    )
}

export default QuestionsPagePrivate
