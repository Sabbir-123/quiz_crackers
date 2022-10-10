import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";



export const QuizContext = createContext([])

const Root = () => {
    const quiz = useLoaderData();
  return (
    <QuizContext.Provider value={quiz.data}>
      <Header></Header>  
      <Outlet></Outlet>
      <Footer></Footer>
    </QuizContext.Provider>
  );
};

export default Root;
