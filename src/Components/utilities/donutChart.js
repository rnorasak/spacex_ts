import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = (props) => {
  const data = props.data;

  return (
    <div>
      <Doughnut
        data={data}
        options={{
          title: {
            display: false,
            text: '',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default DonutChart;
