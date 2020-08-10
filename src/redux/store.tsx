import { configureStore } from '@reduxjs/toolkit';
import launches from './launches';
import launchpads from './launchpad';
import rockets from './rockets';

export default configureStore({
  reducer: { launches, launchpads, rockets },
});
