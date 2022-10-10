import React from 'react';
import Option from './Option';

const Question = ({Squestion}) => {
    const {question, options, correctAnswer} = Squestion;
    return (
        <div className='bg-gray-100 p-6 mx-1 rounded shadow-lg'>
      <h4 className='mb-2 text-xl font-bold leading-none sm:text-2xl'> {question}</h4>
      <p className='text-gray-700 '>Options: {
        options.map(option => <Option option={option}></Option> )
      } </p>
    </div>
    );
};

export default Question;