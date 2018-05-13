import { StackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginForm from './src/screens/LoginForm';
import SignUpForm from './src/screens/SignUpForm';
import firebase from 'firebase';
import ENV from './env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STRAGE,
  messagingSenderId: ENV.FIREBASE_MESSAGE_ID,
};
firebase.initializeApp(config);

const App = StackNavigator({
  Login:      { screen: LoginForm },
  SignUp:     { screen: SignUpForm },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
}, {
  navigationOptions: {
    headerTitle: 'My Memo',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#264FFF',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
