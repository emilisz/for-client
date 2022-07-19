import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate , Link , useParams} from "react-router-dom";

const QuestionEditForm = () => {
    const [title, setTitle] = useState();
    let { questionId } = useParams();
  let navigate = useNavigate();

  const getData = () => {
    console.log('data');
    axios.get('/api/questions/'+questionId)
    .then(function (response) {
      console.log(response.data);
      setTitle(response.data.title)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    getData()
  }, [])
  
    const submitForm = () => {
      axios({
        method: 'post',
        url: `/api/questions/${questionId}`,
        data: {
          title: title,
        }
      }).then(()=>{
        navigate(`/questions/${questionId}`, { replace: true });
      }).catch((e)=>{
        console.log(e);
      });
    }
  
    return (
      <>
        <div>NewQuestionForm</div>
        <input type="text" name="title" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button type="button" onClick={() => submitForm()}>
          Siųsti
        </button>
      </>
    );
  };

export default QuestionEditForm