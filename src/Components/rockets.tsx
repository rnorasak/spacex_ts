import * as React from 'react';
import { connect } from 'react-redux';
import RocketCard from './utilities/rocketCard';
import { fetchRockets } from '../redux/rockets';

interface Props {
  rockets: Array<object>;
  fetchRockets: () => void;
}

const Rockets: React.FC<Props> = (props) => {
  const rockets = props.rockets;

  React.useEffect(() => {
    if (rockets.length === 0) props.fetchRockets();
  }, []);

  if (rockets.length >= 1) {
    return (
      <div>
        {rockets.map((rocket) => (
          <RocketCard rocket={rocket} />
        ))}
        <img
          className="img-fluid"
          src="public\shuttles.png"
          alt="..."
          style={{ backgroundColor: 'white' }}
        />
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

const mapStateToProps = (state: any) => {
  return {
    rockets: state.rockets.rockets,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRockets: () => dispatch(fetchRockets()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Rockets);
