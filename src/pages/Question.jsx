import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
const axios = require('axios').default;

const Question = () => {
  const [question, setQuestion] = useState()
  let { questionId } = useParams();
console.log(questionId);
  const getData = () => {
      console.log('data');
      axios.get('/api/questions/'+questionId)
      .then(function (response) {
        console.log(response);
        setQuestion(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    useEffect(() => {
      getData()
    }, [])

  return (
    <div>{question && question.title}</div>
  )
}

export default Question