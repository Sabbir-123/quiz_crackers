import React from 'react';

const Option = ({option}) => {
    return (
        <div className="form-check ">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="option3"
            className="form-check-input"
          />
          {option}
        </label>
      </div>
    );
};

export default Option;