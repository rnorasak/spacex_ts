import * as React from 'react';
import { connect } from 'react-redux';
import { fetchLaunchpads } from '../redux/launchpad';
import DonutChart from './utilities/donutChart';

const Launchpads = (props) => {
  const launchpads = props.launchpads.launchpads;

  React.useEffect(() => {
    if (launchpads.length === 0) props.fetchLaunchpads();
  }, []);

  var launchData = launchpads.reduce((accumlator, val) => {
    accumlator[val.full_name] =
      (accumlator[val.full_name] || 0) + val.launch_attempts;
    return accumlator;
  }, {});

  if (launchData) {
    const data = {
      labels: Object.keys(launchData),
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '',
            '#eca241',
            '#d7dade',
            '#97c7d9',
            '#1a2b3e',
            '#e0607e',
          ],
          hoverBackgroundColor: [],
          data: Object.values(launchData),
        },
      ],
    };
    return (
      <div>
        <h3>Attempted Launches by Launchpad</h3>
        <br></br>
        <br></br>
        <div className="container">
          <DonutChart data={data} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLaunchpads: () => dispatch(fetchLaunchpads()),
  };
};

const mapStateToProps = (state) => {
  return {
    launchpads: state.launchpads,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launchpads);
