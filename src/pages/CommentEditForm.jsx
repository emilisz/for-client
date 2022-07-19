import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate , Link , useParams} from "react-router-dom";

const CommentEditForm = () => {
    const [title, setTitle] = useState();
    let { questionId, commentId } = useParams();
  let navigate = useNavigate();

  const getData = () => {
    console.log(questionId, commentId);
    axios.get('/api/comments/'+commentId)
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
//   api/questions/:id/comments/:commentId
    const submitForm = () => {
      axios({
        method: 'post',
        url: `/api/comments/${commentId}`,
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
        <div>Comment edit</div>
        <input type="text" name="title" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button type="button" onClick={() => submitForm()}>
          Siųsti
        </button>
      </>
    );
  };

export default CommentEditForm