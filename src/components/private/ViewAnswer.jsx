import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import "../../../node_modules/react-quill/dist/quill.snow.css";

const ViewAnswer = ({ answer, deleteAnswer }) => {
  const state = useSelector((state) => state.auth);

  return (
    <div className="vista-respuestas">
      <div>
        <ReactQuill
          className="quill-editor"
          readOnly="true"
          preserveWhitespace="false"
          value={answer.answer}
          modules={ViewAnswer.modules}
        />
      </div>
      <div className="boton-eliminar-respuesta">
        {state.user.uid === answer.userId ? deleteAnswer && (
          <button
            className="button"
            id={answer.id}
            onClick={() => deleteAnswer(answer.id)}
          >
            Eliminar Respuesta
          </button>
        ):null}
        {console.log(answer.id, "id")}
      </div>
    </div>
  );
};

ViewAnswer.modules = {
  toolbar: false,
};

export default ViewAnswer;
