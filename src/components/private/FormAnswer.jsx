import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import TextEditor from '../../hooks/TextEditor';

const FormAnswer = ({idQuestion}) => {

    const state =useSelector(state=>state.auth)
    const dispatch = useDispatch();

    const [body, setBody] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        const formData = { 
            userId: state.user.uid,
            questionId: idQuestion,
            answer: body,
            position: 1
        }
        dispatch(postAnswer(formData));
        setBody("");
      }

    return(

        <div>
            <form onSubmit={submitForm}>
                <h1>Respuestas</h1>
                <label>Añade una respuesta.</label>
                <TextEditor body={body} setBody={setBody}/>
                <button type="submit">Enviar Respuesta</button>
            </form>
        </div>

    )

}

export default FormAnswer;