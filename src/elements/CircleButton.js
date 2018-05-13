import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import { Font } from 'expo';
import fontawesome from '../../assets/fonts/fontawesome-webfont.ttf';
//import fontawesome from '../../assets/fonts/FontAwesome.otf';

class CircleButton extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentwillMount() {
    await Font.loadAsync({
      'FontAwesome': fontawesome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color, onPress } = this.props;

    let bgColor = '#3591FA';
    let textColor = '#fff';

    if (color == 'white') {
      bgColor = '#fff';
      textColor = '#3591FA';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                {this.props.children}
              </Text>
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleButton: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 32,
    lineHeight: 32,
  },
})

export default CircleButton;
