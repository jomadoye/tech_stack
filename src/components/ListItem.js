/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import CardSection from './commons/CardSection';
import * as actions from '../actions';

class ListItem extends Component<{}> {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  rederDescription() {
    const { library, expanded } = this.props;
    return (
      expanded && (
        <CardSection>
          <Text style={styles.descriptionTextStyle}>{library.description}</Text>
        </CardSection>
      )
    );
  }
  render() {
    const { id, title } = this.props.library;
    const { headerTextStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={headerTextStyle}>{title}</Text>
          </CardSection>
          {this.rederDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 18,
    paddingLeft: 15,
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  descriptionTextStyle: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {
    selectedLibraryId: state.selectedLibraryId,
    expanded,
  };
};
export default connect(mapStateToProps, actions)(ListItem);
