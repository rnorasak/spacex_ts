import * as React from 'react';
import { connect } from 'react-redux';
import { fetchNextLaunch } from '../redux/launches';
import { fetchLaunchpads } from '../redux/launchpad';
import { fetchRockets } from '../redux/rockets';
import NextLaunch from './utilities/nextLaunch';

const Home = (props) => {
  const nextLaunch = props.launches.nextLaunch;

  const launchpads = props.launchpads.launchpads;

  const rockets = props.rockets.rockets;

  React.useEffect(() => {
    if (nextLaunch.length === 0) props.fetchNextLaunch();
    if (launchpads.length === 0) props.fetchLaunchpads();
    if (rockets.length === 0) props.fetchRockets();
  }, []);

  if (nextLaunch && launchpads.length >= 1 && rockets.length >= 1) {
    return (
      <NextLaunch
        key={nextLaunch.flight_number}
        launch={nextLaunch}
        launchpad={launchpads.filter(
          (launchpad) => launchpad.id === nextLaunch.launchpad
        )}
        rocket={rockets.filter((rocket) => rocket.id === nextLaunch.rocket)}
      />
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
    fetchNextLaunch: () => dispatch(fetchNextLaunch()),
    fetchLaunchpads: () => dispatch(fetchLaunchpads()),
    fetchRockets: () => dispatch(fetchRockets()),
  };
};

const mapStateToProps = (state) => {
  return {
    launches: state.launches,
    launchpads: state.launchpads,
    rockets: state.rockets,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
