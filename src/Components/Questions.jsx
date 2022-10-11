import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Questions = () => {
    const questions = useLoaderData().data.questions;
    return (
        <div className='grid gap-8 row-gap-5 mx-20 rounded lg:grid-cols-1 lg:row-gap-8'>
            {
                questions.map(Squestion => <Question key={Squestion.id} Squestion={Squestion}></Question>)
            }
        </div>
    );
};

export default Questions;