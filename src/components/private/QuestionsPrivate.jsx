import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

const QuestionsPrivate = ({ question, deleteQuestion }) => {
  return (
    <div>
      <div className="pregunta">
        <Link to={`/private/question/${question.id}`} className="btn-detalle">
        <ReactQuill
            className="quill-preguntas"
            readOnly='true'
            preserveWhitespace='false'
            value={question.question}
            modules={QuestionsPrivate.modules}
                        />
          <div className="spans-position">
            <span className="span-category">{question.category}</span>
            <span className="span-type">{question.type}</span>
          </div>
        </Link>
      </div>
      {deleteQuestion && (
        <button
          className="button right"
          id={question.id}
          onClick={() => deleteQuestion(question.id)}
        >
          DELETE
        </button>
      )}
    </div>
  );
};

QuestionsPrivate.modules = {toolbar: false}

export default QuestionsPrivate;
