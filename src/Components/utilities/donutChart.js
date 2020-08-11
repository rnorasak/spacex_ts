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
          },
          legend: {
            display: true,
            position: 'right',
            labels: {
              fontSize: 15,
              fontColor: '#d7dade',
            },
          },
        }}
      />
    </div>
  );
};

export default DonutChart;
