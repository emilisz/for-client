import axios from "axios";
import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";

const NewQuestionForm = () => {
  const [title, setTitle] = useState();
  let navigate = useNavigate();

  const submitForm = () => {
    axios({
      method: 'post',
      url: '/api/questions',
      data: {
        title: title,
      }
    }).then(()=>{
      navigate("/", { replace: true });
    }).catch((e)=>{
      console.log(e);
    });
  }

  return (
    <>
      <div>NewQuestionForm</div>
      <input type="text" name="title" placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
      <button type="button" onClick={() => submitForm()}>
        Siųsti
      </button>
    </>
  );
};

export default NewQuestionForm;
