import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';
import firebase from 'firebase';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  }

  //sign in method
  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log('success', user);
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Login
        </Text>
        <TextInput
          style={styles.input}
          value={this.props.email}
          onChangeText={(text) => {this.setState({email: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="E-mail Address"
        />
        <TextInput
          style={styles.input}
          value={this.props.password}
          onChangeText={(text) => {this.setState({password: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}  underlayColor='#156ED6'>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.toSignupButton} onPress={() => {this.props.navigation.navigate('SignUp');}} underlayColor="transparent">
          <Text style={styles.toSignupText}>sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 48,
    fontSize: 20,
    margin: 16,
    padding: 8,
  },
  button: {
    backgroundColor: '#3591FA',
    height: 48,
    marginTop: 16,
    marginBottom: 24,
    //marginRight: 52,
    //marginLeft: 52,
    width: '60%',
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
  toSignupButton: {
    alignSelf: 'center',
  },
  toSignupText: {
    color: '#3591FA',
    fontSize: 16,
  },
});

export default LoginForm;
