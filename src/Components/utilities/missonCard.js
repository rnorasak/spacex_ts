import * as React from 'react';
import * as moment from 'moment';

const MissonCard = (props) => {
  const launch = props.launch;
  const launchpad = props.launchpad;
  const rocket = props.rocket;

  if (launch && launchpad && rocket) {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          data-toggle="collapse"
          data-target={`#collapseExample-${launch.flight_number}`}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={styles.card}
        >
          <div className="col">
            <img
              style={styles.patch}
              src={launch.links.patch.small}
              alt="..."
            />
          </div>
          <div className="col">
            <h3>{launch.name}</h3>
            <h6>
              {launch.success ? (
                <h6 style={styles.success}>Success</h6>
              ) : (
                <h6 style={styles.failure}>Failure</h6>
              )}
            </h6>
          </div>
          <div className="col">
            <h6>Flight #{launch.flight_number}</h6>
            <h6>{moment(launch.date_local).format('LL')}</h6>
            <h6>{launchpad[0].locality}</h6>
            <h6>
              <i className="fa fa-rocket" aria-hidden="true" />
              {'  '}
              {rocket[0].name}
            </h6>
          </div>
        </div>
        <div
          className="collapse"
          id={`collapseExample-${launch.flight_number}`}
        >
          <div style={styles.expandable}>
            <p>{launch.details}</p>
            {launch.links &&
              launch.links.flickr.original.map((imageUrl) => {
                return (
                  <a href={imageUrl} target="_blank">
                    <img
                      style={styles.image}
                      src={imageUrl}
                      className="img "
                      alt={'...'}
                    />
                  </a>
                );
              })}
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
  patch: {
    maxWidth: '50%',
    height: 'auto',
  },
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
  success: {
    color: '#97c7d9',
  },
  failure: {
    color: '#E0607E',
  },
  image: {
    maxWidth: '300px',
    maxHeight: '200px',
    margin: '5px',
  },
};

export default MissonCard;
