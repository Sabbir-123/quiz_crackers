import React, { useContext } from "react";
import Quizes from "./Quizes";
import { QuizContext } from "./Root";


const Home = () => {
    const quiz = useContext(QuizContext)
    console.log(quiz)

  return (
    <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
            Welcome To Flashy Quiz
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Flashy Quiz is a web-based Audience Engagement Cloud Platform for
            hosting interactive trivia quizzes at in-person, virtual, and hybrid
            events. No app install is required
          </p>
         <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8'">
         {
            quiz.map(quizes => <Quizes key={quizes.id} quizes={quizes} ></Quizes>)
          }
         </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
