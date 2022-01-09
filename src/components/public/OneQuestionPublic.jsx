import { Link } from "react-router-dom"

const OneQuestionPublic = ({question}) => {

    return(
        <div>
            <p>{question.category}  - <small>{question.type}</small></p>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
        </div>
    )
}

export default OneQuestionPublic