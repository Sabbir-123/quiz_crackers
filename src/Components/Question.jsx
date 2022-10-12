import React from 'react';
import Option from './Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'
  import { toast } from 'react-toastify';


const Question = ({Squestion}) => {
    const {question, options, correctAnswer, id} = Squestion;

    const handleRightQuiz = () => {
        toast(`The correct answer is: ${correctAnswer}`);
      }
    
    return (
        <div className='bg-gray-100 p-6 mx-1 rounded shadow-lg'>
    <div className='flex justify-between align-middle'>
    <h4  className='grid grid-cols-1 mb-2 text-xl font-bold leading-none sm:text-2xl'> {question} </h4>
      <p onClick={handleRightQuiz} className='cursor-pointer'>
      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>

          </p>
    </div>
          
      <p className='text-gray-700 '>Options: {
        
        options.map(option => <Option option={option} key={id} correctAnswer={correctAnswer}></Option> )
        
      }
        
       </p>
    </div>
    );
};

export default Question;