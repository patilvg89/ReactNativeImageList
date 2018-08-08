import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions";

class DetailsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading, selectedImageIndex, data } = this.props;
    console.log(loading, selectedImageIndex, data);

    if (loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: data[selectedImageIndex].thumbnail }}
          style={styles.image}
        />
      </View>
    );
  }
}

DetailsComponent.propTypes = {
  selectedImageIndex: PropTypes.number,
  loading: PropTypes.bool,
  data: PropTypes.array
};

function mapStateToProps(state) {
  return {
    loading: state.dataReducer.loading,
    data: state.dataReducer.data,
    selectedImageIndex: state.dataReducer.selectedImageIndex
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  },
  image: {
    width: 300,
    height: 300,
    alignItems: "center"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsComponent);
