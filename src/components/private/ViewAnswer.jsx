import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import "../../../node_modules/react-quill/dist/quill.snow.css";

const ViewAnswer = ({ answer, deleteAnswer }) => {
  const state = useSelector((state) => state.auth);

  return (
    <div>
      <div>
        <ReactQuill
          className="quill-editor"
          readOnly="true"
          preserveWhitespace="false"
          value={answer.answer}
          modules={ViewAnswer.modules}
        />
      </div>
      <div className="col-1">
        {deleteAnswer && (
          <button
            className="btn-danger"
            id={answer.id}
            onClick={() => deleteAnswer(answer.id)}
          >
            Eliminar Respuesta
          </button>
        )}
        {console.log(answer.id, "id")}
      </div>
    </div>
  );
};

ViewAnswer.modules = {
  toolbar: false,
};

export default ViewAnswer;
