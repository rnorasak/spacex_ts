import Axios from 'axios';

const get_Past_Launches: string = 'GET_PAST_LAUNCHES';

const get_Next_Launch: string = 'GET_NEXT_LAUNCH';

const pastLaunches = (pastLaunches: any) => {
  return {
    type: get_Past_Launches,
    pastLaunches,
  };
};

const nextLaunch = (nextLaunch: any) => {
  return {
    type: get_Next_Launch,
    nextLaunch,
  };
};

export const fetchPastLaunches = () => {
  return async (dispatch: any) => {
    try {
      const { data } = await Axios.get(
        'https://api.spacexdata.com/v4/launches/past'
      );
      dispatch(
        pastLaunches(
          //sort by newest launches first by flight number
          data.sort((launch1: any, launch2: any) =>
            launch1.flight_number < launch2.flight_number ? 1 : -1
          )
        )
      );
    } catch (err) {
      console.log('Error fetching past launches!', err);
    }
  };
};

export const fetchNextLaunch = () => {
  return async (dispatch: any) => {
    try {
      const { data } = await Axios.get(
        'https://api.spacexdata.com/v4/launches/next'
      );
      dispatch(nextLaunch(data));
    } catch (err) {
      console.log('Error fetching next launch!', err);
    }
  };
};

const initialState = {
  pastLaunches: [],
  nextLaunch: [],
};

const launches = (state = initialState, action: any) => {
  switch (action.type) {
    case get_Past_Launches:
      return { ...state, pastLaunches: action.pastLaunches };
    case get_Next_Launch:
      return { ...state, nextLaunch: action.nextLaunch };
    default:
      return state;
  }
};

export default launches;
