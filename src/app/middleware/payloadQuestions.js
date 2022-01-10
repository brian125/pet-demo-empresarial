import { questionsLoading ,questionsLoadSucces,questionsLoadError } from "../../actions/QuestionsActions";
import {oneQuestionLoadSucces , oneQuestionLoadError, oneQuestionsLoading, oneQuestionsDeleteAnswer} from "../../actions/OneQuestionActions";
import { myQuestionsLoadSucces, myQuestionsLoading,myQuestionsLoadError } from "../../actions/MyQuestionsActions";
import axios from "axios";

export const loadAllQuestion=()=>(dispatch)=>{
  
    dispatch(questionsLoading())

    const options = {
    method: 'GET',
    url: 'https://pet-demo-empresarial.herokuapp.com/getAll',
    headers: {'Content-Type': 'application/json'}
    };

    axios.request(options).then(function (response) {
        dispatch(questionsLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(questionsLoadError(error.message))
    });
}


export const loadById=(id)=>(dispatch)=>{


    const options = {
        method: 'GET',
        url: `https://pet-demo-empresarial.herokuapp.com/get/${id}`,
        headers: {'Content-Type': 'application/json'}
        };
    
        console.log(id, "Desde el payload");
        axios.request(options).then(function (response) {
          console.log(response.data, "LLEGOOOOO");
          dispatch(oneQuestionLoadSucces(response.data));
          console.log(response.data, "Despues del seccess");
        }).catch(function (error) {
            dispatch(oneQuestionLoadError(error.message))
        });
}

export const postQuestion=(question, navigate)=>{

    const options = {
        method: 'POST',
        url: 'https://pet-demo-empresarial.herokuapp.com/create',
        headers: {'Content-Type': 'application/json'},
        data: question
      };
      
      axios.request(options).then(function (response) {
        navigate("/private/QuestionsPage")
      }).catch(function (error) {
        console.error(error);
      });
}


export const postAnswer=( answer ) => ( dispatch ) =>{

  const options = {
      method: 'POST',
      url: 'https://pet-demo-empresarial.herokuapp.com/answer/add',
      headers: {'Content-Type': 'application/json'},
      data: answer
    };
    console.log(answer, "answer")
    axios.request(options).then(function (response) {
      console.log(response.data, "response.data");
      dispatch(oneQuestionLoadSucces(response.data))
    }).catch(function (error) {
      console.error(error);
    });
}


export const deleteQuestion=(id, myQuestions)=> (dispatch) => {
    const options = {method: 'DELETE', 
    url: `https://pet-demo-empresarial.herokuapp.com/delete/${id}`};

        axios.request(options).then(function (response) {
        const deleteo = myQuestions.filter(question => question.id !== id)
        dispatch(myQuestionsLoadSucces(deleteo))
        console.log(response.data);
        }).catch(function (error) {
        console.error(error);
        });
}

export const deleteAnswer = (id) => (dispatch) => {
  dispatch(oneQuestionsLoading())
  const options = {
    method: 'DELETE',
    url: `https://pet-demo-empresarial.herokuapp.com/answer/delete/${id}`
  };
  axios.request(options).then(function (response) {
    dispatch(oneQuestionsDeleteAnswer(id))
  }).catch(function (error) {
    dispatch(oneQuestionLoadError(error.message))
  });
}

export const getUserQuestion=(userId)=>(dispatch)=>{

    dispatch(myQuestionsLoading())

    const options = {
        method: 'GET',
        url: `https://pet-demo-empresarial.herokuapp.com/getOwnerAll/${userId}`,
        headers: {'Content-Type': 'application/json'}
      };
      axios.request(options).then(function (response) {
        dispatch(myQuestionsLoadSucces(response.data));
      }).catch(function (error) {
        dispatch(myQuestionsLoadError(error.message));
      });
}