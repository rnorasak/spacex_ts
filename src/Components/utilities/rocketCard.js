import * as React from 'react';

const RocketCard = (props) => {
  const rocket = props.rocket;

  if (rocket) {
    return (
      <div className="container">
        <div
          data-toggle="collapse"
          data-target={`#collapseExample`}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={styles.card}
        >
          <h3>{rocket.name}</h3>
          <div className="row align-items-center justify-content-center">
            <div className="col">
              <h6>
                Height: {rocket.height.feet} (ft) / {rocket.height.meters} (m)
              </h6>
              <h6>Cost per Launch: ${rocket.cost_per_launch}</h6>
              <h6>First Flight: {rocket.first_flight}</h6>
            </div>

            <div className="col">
              <h6>Status: {rocket.active ? 'Active' : 'Inactive'}</h6>
              <h6>Success Rate: {rocket.success_rate_pct}% </h6>
              <h6>Stages: {rocket.stages}</h6>
            </div>
          </div>
          <div className="collapse" id={`collapseExample`}>
            <p style={styles.expandable}>{rocket.description}</p>
          </div>
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

const styles = {
  card: {
    border: '2px #102542 solid',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#1A2B3E',
  },
  expandable: {
    margin: '10px',
  },
};
export default RocketCard;
