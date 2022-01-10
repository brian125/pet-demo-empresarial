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
                <label className="font-medium">Type</label>
                {/* <input required name="question" type="text" placeholder='Ingresa una pregunta acá'></input> */}
                <select required className="" name="type" defaultValue="Type">
                  <option disabled type="String" value="">Type</option>
                  <option type="String">OPEN</option>
                  <option type="String">OPINION</option>
                  <option type="String">WHITH_RESULT</option>
                  <option type="String">WHITH_EVIDENCE</option>
                </select>
                <label className=" font-medium">Category</label>
                <select required name="category"  defaultValue="Category">
                  <option disabled type="String"  value="">Category</option>
                  <option type="String">ARTES</option>
                  <option type="String">CIENCIAS_AGRARIAS</option>
                  <option type="String">CIENCIAS_ECONOMICAS</option>
                  <option type="String">CIENCIAS_EXACTAS_NATURALES</option>
                  <option type="String">CIENCIAS_FARMACEUTICAS_ALIMENTARIAS</option>
                  <option type="String">CIENCIAS_SOCIALES_HUMANAS</option>
                  <option type="String">COMUNICACIONES</option>
                  <option type="String">DERECHO_CIENCIAS_POLITICAS</option>
                  <option type="String">EDUCACION</option>
                  <option type="String">ENFERMERIA</option>
                  <option type="String">INGENIERIA</option>
                  <option type="String">MEDICINA</option>
                  <option type="String">ODONTOLOGIA</option>
                  <option type="String">SALUD_PUBLICA</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )

}

export default FormQuestion