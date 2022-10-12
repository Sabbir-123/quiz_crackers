import React, { useContext } from 'react';
import { QuizContext } from './Root';

import { LineChart,CartesianGrid, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const quiz = useContext(QuizContext);


    return (
        <div className="stats justify-center grid">
      <h2>Quiz Statistics</h2>
      <div className="chart ">
        <LineChart width={500} height={500} data={quiz}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          <Line
            type="monotone"
            dataKey="total"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
            fill="#E6425E"
          />
        </LineChart>
      </div>
      <p>Total Available Questions</p>
    </div>
    );
};

export default Statistics;

