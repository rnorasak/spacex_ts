import Axios from 'axios';

const get_launchpads: string = 'get_launchpads';

const getLaunchpads = (launchpads: any) => {
  return {
    type: get_launchpads,
    launchpads,
  };
};

export const fetchLaunchpads = () => {
  return async (dispatch: any) => {
    try {
      const { data } = await Axios.get(
        `https://api.spacexdata.com/v4/launchpads/`
      );
      dispatch(getLaunchpads(data));
    } catch (err) {
      console.log('Error fetching launchpad!', err);
    }
  };
};

const initialState = {
  launchpads: [],
};

const launchpads = (state = initialState, action: any) => {
  switch (action.type) {
    case get_launchpads:
      return { ...state, launchpads: action.launchpads };
    default:
      return state;
  }
};

export default launchpads;
