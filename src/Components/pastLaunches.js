import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPastLaunches } from '../redux/launches';
import { fetchLaunchpads } from '../redux/launchpad';
import { fetchRockets } from '../redux/rockets';

import MissonCard from './utilities/missonCard';

// interface Props {
//   launches: Array<object>;
//   launchpads: Array<object>;
//   rockets: Array<object>;
//   fetchPastLaunches: () => void;
//   fetchLaunchpads: () => void;
//   fetchRocekts: () => void;
// }

const PastLaunches = (props) => {
  const prevLaunches = props.launches;

  const launchpad = props.launchpads;

  const rockets = props.rockets;

  React.useEffect(() => {
    if (prevLaunches.length === 0) props.fetchPastLaunches();
    if (launchpad.length === 0) props.fetchLaunchpads();
    if (rockets.length === 0) props.fetchRockets();
  }, []);

  if (prevLaunches && prevLaunches.length >= 1 && rockets.length >= 1) {
    return prevLaunches.map((launch) => (
      <MissonCard
        key={launch.flight_number}
        launch={launch}
        launchpad={launchpad.filter(
          (launchpad) => launchpad.id === launch.launchpad
        )}
        rocket={rockets.filter((rocket) => rocket.id === launch.rocket)}
      />
    ));
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
    fetchPastLaunches: () => dispatch(fetchPastLaunches()),
    fetchLaunchpads: () => dispatch(fetchLaunchpads()),
    fetchRockets: () => dispatch(fetchRockets()),
  };
};

const mapStateToProps = (state) => {
  return {
    launches: state.launches.pastLaunches,
    launchpads: state.launchpads.launchpads,
    rockets: state.rockets.rockets,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PastLaunches);
