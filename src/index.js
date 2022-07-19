import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Questions from "./pages/Questions";
import NewQuestionForm from "./pages/NewQuestionForm";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NewCommentForm from "./pages/NewCommentForm";
import QuestionEditForm from "./pages/QuestionEditForm";
import CommentEditForm from "./pages/CommentEditForm";
import Header from "./pages/components/Header";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="questions" element={<Questions />} />
      <Route path="questions/new" element={<NewQuestionForm />} />
      {/* <Route path="questions/:questionId/comments/new" element={<NewCommentForm />} /> */}
      <Route path="questions/:questionId" element={<Question />} />
      <Route path="questions/:questionId/edit" element={<QuestionEditForm />} />
      <Route path="questions/:questionId/comments/:commentId/edit" element={<CommentEditForm />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
