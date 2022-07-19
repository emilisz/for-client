import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
const axios = require('axios').default;


const Home = () => {
    const [questions, setQuestions] = useState()

    const getData = () => {
        console.log('data');
        axios.get('/api/home')
        .then(function (response) {
          console.log(response);
          setQuestions(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
      }

      useEffect(() => {
        getData()
      }, [])

  return (
    <div>
        <div>Forum</div>
       
        <Link to='/questions/new'>new +</Link>
    <ul>
        {questions && questions.map(q=>{
            return <li key={q._id}><Link to={"/questions/"+q._id}>title: {q.title}, author: {q.user && q.user.username}, created: {q.createdAt}, comments: {q.comments.length}</Link></li>
        })}
    </ul>
    </div>
  )
}

export default Home