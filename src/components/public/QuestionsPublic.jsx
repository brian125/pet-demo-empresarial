import ReactQuill from "react-quill"
import { Link } from "react-router-dom"

const QuestionsPublic = ({question}) => {  

    return(
        <div className="pregunta">
        <Link to={`/question/${question.id}`} className="btn-detalle">
        
            
        <ReactQuill
            className="quill-preguntas"
            readOnly='true'
            preserveWhitespace='false'
            value={question.question}
            modules={QuestionsPublic.modules}
                        />
                <div className="spans-position">
                <span className="span-category">{question.category}</span>
                <span className="span-type">{question.type}</span>
                </div>
                    {/* { {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
                 )}} */}
        </Link>
        </div>
    )
}

QuestionsPublic.modules = {toolbar: false}

export default QuestionsPublic