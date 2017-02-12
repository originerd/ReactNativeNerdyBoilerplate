import React, { PropTypes } from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import LoginScreen from '../components/LoginScreen';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const Navigator = StackNavigator({
  Login: { screen: LoginScreen },
}, {
  initialRouteName: 'Login',
  navigationOptions: {
    title: 'Fivens',
  },
});

const Navigation = ({ dispatch, navigation }) => (
  <Navigator
    navigation={
      addNavigationHelpers({
        dispatch,
        state: navigation,
      })
    }
  />
);

Navigation.propTypes = propTypes;

export default connect(state => ({
  navigation: state.navigation,
}))(Navigation);
export { Navigator };
