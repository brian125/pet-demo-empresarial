import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useDispatch, useSelector } from 'react-redux';
import TextEditor from '../../hooks/TextEditor';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';


const FormQuestion = () => {

    const state =useSelector(state=>state.auth)

    const dispatch = useDispatch();
    const [body, setBody] = useState("");
    const navigate = useNavigate()

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        console.log();
        const data = {
          userId: form.current[0].value,
          question: body,
          type: form.current[1].value,
          category: form.current[2].value
        }
        postQuestion(data,navigate);
      }

    return(
        <div>
            <h2 className='sub-pregunta'>Crea una nueva pregunta</h2>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
              <br />
              <TextEditor body={body} setBody={setBody}/>
                <input  required name="userId" hidden type="text" value={state.user.uid} placeholder='Ingresa una pregunta acá'></input>
                <label className="label-tc">Tipo</label>
                {/* <input required name="question" type="text" placeholder='Ingresa una pregunta acá'></input> */}
                <select required className="select-tc" name="type" defaultValue="Type">
                  <option disabled type="String" value="">Tipo</option>
                  <option type="String">OPEN</option>
                  <option type="String">OPINION</option>
                  <option type="String">WHITH_RESULT</option>
                  <option type="String">WHITH_EVIDENCE</option>
                </select>
                <label className="label-tc">Categoria</label>
                <select required className='select-tc' name="category"  defaultValue="Category">
                  <option disabled type="String"  value="">Categoria</option>
                  <option type="String">TECHNOLOGY_AND_COMPUTER</option>
                  <option type="String">SCIENCES</option>
                  <option type="String">SOFTWARE_DEVELOPMENT</option>
                  <option type="String">SOCIAL_SCIENCES</option>
                  <option type="String">LANGUAGE</option>
                  <option type="String">COMPUTER</option>
                </select>
                <br />
                <button className='button btn-preguntas' type="submit">Enviar</button>
            </form>
        </div>
    )

}

export default FormQuestion