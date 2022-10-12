import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Option = ({option, correctAnswer}) => {
    console.log(option);
    const handleQuiz = e =>{
        if(e === correctAnswer){
            toast('You have choosed the correct Answer')
        }else{
            toast('You have choosed the wrong Answer')
        }
    }
    return (
        <div className="form-check border bottom-3 border-gray-600 border-spacing-3 hover:border-dotted">
        <label  className="flex align-middle p-3">
            <input
              type="radio"
              name="quiz"
              value={option.value}
          
              className="radio radio-accent mr-2"
              defaultChecked={option.value === correctAnswer}
              onChange={() => handleQuiz(option)}
            />
            {option}
        
            <ToastContainer />
          </label>
      </div>
    );
};

export default Option;