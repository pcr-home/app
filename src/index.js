import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { Root, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import theme from '../native-base-theme/variables/commonColor';

import Routes from './routes/index';
import Loading from './components/UI/Loading';

import * as firebase from "firebase";



// Big security concern!!!
var firebaseConfig = {
    apiKey: "AIzaSyABYRK1SJNEwSVVlmAh80p2hfDeBGcaVEs",
    authDomain: "pcr-home-backend.firebaseapp.com",
    databaseURL: "https://pcr-home-backend.firebaseio.com",
    projectId: "pcr-home-backend",
    storageBucket: "pcr-home-backend.appspot.com",
    messagingSenderId: "855807178171",
    appId: "1:855807178171:web:2c96c6b2674b214521009e",
    measurementId: "G-JQBZR34K0R"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 





class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    SplashScreen.hide();
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { store, persistor } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <StyleProvider style={getTheme(theme)}>
              <Router>
                <Stack key="root">{Routes}</Stack>
              </Router>
            </StyleProvider>
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;
