import ReactQuill from "react-quill"
import { Link } from "react-router-dom"

const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <div className='pregunta'>
            <ReactQuill
            className="quill-preguntas"
            readOnly='true'
            preserveWhitespace='false'
            value={oneQuestion.question}
            modules={OneQuestionPrivate.modules}
            theme="bubble"
                        /> 
          <div className="spans-position">
            <span className="span-category">{oneQuestion.category}</span>
            <span className="span-type">{oneQuestion.type}</span>
          </div>
        </div>
    )
}

OneQuestionPrivate.modules = {toolbar: false}

export default OneQuestionPrivate