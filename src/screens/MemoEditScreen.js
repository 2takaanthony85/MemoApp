import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="Hi" />
        <CircleButton onPress={() => {this.props.navigation.goBack();}}>
          {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flex: 1,
    fontSize: 18,
    backgroundColor: '#fff',
    //color: '#616161',
  },
});

export default MemoEditScreen;
