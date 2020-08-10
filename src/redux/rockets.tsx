import Axios from 'axios';

const get_rockets: string = 'get_rockets';

const getRockets = (rockets: any) => {
  return {
    type: get_rockets,
    rockets,
  };
};

export const fetchRockets = () => {
  return async (dispatch: any) => {
    try {
      const { data } = await Axios.get(
        `https://api.spacexdata.com/v4/rockets/`
      );
      dispatch(getRockets(data));
    } catch (err) {
      console.log('Error fetching launchpad!', err);
    }
  };
};

const initialState = {
  rockets: [],
};

const rockets = (state = initialState, action: any) => {
  switch (action.type) {
    case get_rockets:
      return { ...state, rockets: action.rockets };
    default:
      return state;
  }
};

export default rockets;
