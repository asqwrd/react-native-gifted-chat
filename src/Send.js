import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
const MK = require('react-native-material-kit');
const {
  MKButton,
  MKColor,
} = MK;

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'flex-end'
  },
  text: {
    color: '#0084ff',
    fontWeight: '600',
    fontSize: 17,
    backgroundColor: 'transparent',
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  fab: {
    width: 34,
    height: 34,
    marginLeft:10,
    marginRight:10,
    marginBottom:5,
    marginTop:5
  }
});

const AccentColoredFab = MKButton.accentColoredFab()
  .withStyle(styles.fab)
  .build();

export default class Send extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    if (this.props.text.trim().length > 0) {
      return (
        <TouchableOpacity
          style={[styles.container, this.props.containerStyle]}

          accessibilityTraits="button"
        >
          <AccentColoredFab onPress={() => {
            this.props.onSend({text: this.props.text.trim()}, true);
          }}>
            <Icon name="send" color="#ffffff" />
          </AccentColoredFab>
        </TouchableOpacity>
      );
    }
    return <View/>;
  }
}


Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: 'Send',
  containerStyle: {},
  textStyle: {},
};

Send.propTypes = {
  text: React.PropTypes.string,
  onSend: React.PropTypes.func,
  label: React.PropTypes.string,
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
};
