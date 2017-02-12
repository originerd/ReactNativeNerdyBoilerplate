import { Navigator } from '../containers/Navigation';

const navigation = (state, action) =>
  Navigator.router.getStateForAction(action, state);

export default navigation;
