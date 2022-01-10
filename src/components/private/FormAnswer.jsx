import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import TextEditor from '../../hooks/TextEditor';
import useFormData from '../../hooks/UseFormData';

const FormAnswer = ({idQuestion}) => {

    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    const [ body, setBody ] = useState("");
    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        const formData = { 
            userId: state.user.uid,
            questionId: idQuestion,
            answer: body,
            position: 1
        }
        console.log(formData, "formData");
        dispatch(postAnswer(formData));
        setBody("");
      }

    return(

        <div>
            <form onSubmit={submitForm} onChange={updateFormData}>
                
                <label className='sub-respuesta'>Añade una respuesta.</label>
                <TextEditor body={body} setBody={setBody}/>
                <button className='button' type="submit">Enviar Respuesta</button>
                <h2>Respuestas</h2>
            </form>
        </div>

    )

}

export default FormAnswer;