/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Platform, StyleSheet, Text, View } from "react-native";

class LibraryList extends Component<{}> {
  render() {
    console.log(this.props.libraries);
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
