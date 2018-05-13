import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';
import firebase from 'firebase';

class SignUpForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  //sign up method
  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log('success', user);
        this.props.navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });


  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Sign Up
        </Text>
        <TextInput
          style={styles.input}
          value={this.props.email}
          onChangeText={(text) => { this.setState({ email: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="E-mail Address"
        />
        <TextInput
          style={styles.input}
          value={this.props.password}
          onChangeText={(text) => {this.setState({ password: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor='#156ED6'>
          <Text style={styles.buttonTitle}>登録する</Text>
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
    //marginBottom: 16,
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
});

export default SignUpForm;
