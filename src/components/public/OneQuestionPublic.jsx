import ReactQuill from "react-quill"
import { Link } from "react-router-dom"

const OneQuestionPublic = ({question}) => {

    return(
        <div className="pregunta">
            <ReactQuill
            className="quill-preguntas"
            readOnly='true'
            preserveWhitespace='false'
            value={question.question}
            modules={OneQuestionPublic.modules}
            theme="bubble"
        />
                <div className="spans-position">
                <span className="span-category">{question.category}</span>
                <span className="span-type">{question.type}</span>
                </div>
        </div>
    )
}

OneQuestionPublic.modules = {toolbar: false}

export default OneQuestionPublic