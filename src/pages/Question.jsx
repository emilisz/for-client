import moment from "moment";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const axios = require("axios").default;

const Question = () => {
  const [question, setQuestion] = useState();
  const [title, setTitle] = useState();
  let { questionId } = useParams();
  let navigate = useNavigate();

  console.log(questionId);
  const getData = () => {
    console.log("data");
    axios
      .get("/api/questions/" + questionId)
      .then(function (response) {
        console.log(response.data);
        setQuestion(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const submitForm = () => {
    axios({
      method: "post",
      url: `/api/questions/${questionId}/comments`,
      data: {
        title: title,
      },
    })
      .then(() => {
        window.location.reload(false);
        // navigate("/", { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteQuestion = () => {
    axios({
      method: "delete",
      url: `/api/questions/${questionId}`,
    })
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteComment = (id) => {
    console.log(id);
    axios({
      method: "delete",
      url: `/api/comments/${id}`,
    })
      .then(() => {
        // window.location.reload(false);
        getData()
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div>
        {question && question.title}{" "}
        <Link to={"/questions/" + questionId + "/edit"}>
          <button>edit</button>
        </Link>
        <button type="button" onClick={() => deleteQuestion()}>
          Delete question
        </button>
      </div>
      <ul>
        {question &&
          question.comments.map((q) => {
            return (
              <li key={q._id}>
                {q.title}
                {q.createdAt !== q.updatedAt ? " , redaguota: " + moment(q.updatedAt).format("LT") : " " + moment(q.createdAt).format("LT")}
                {q.user && q.user.username}
                <Link to={"/questions/" + questionId + "/comments/" + q._id + "/edit"}>
                  <button>edit</button>
                </Link>
                <button type="button" onClick={() => deleteComment(q._id)}>
                  Delete comment
                </button>
              </li>
            );
          })}
      </ul>

      <label htmlFor="title">Comment</label>
      <input type="text" name="title" id="title" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <button type="button" onClick={() => submitForm()}>
        Siųsti
      </button>
    </>
  );
};

export default Question;
