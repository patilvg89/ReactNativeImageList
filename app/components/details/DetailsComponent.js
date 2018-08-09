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

  renderLeftArrow() {
    return (
      <Image
        source={require("../../assets/arrow_left.png")}
        style={styles.leftArrow}
      />
    );
  }

  renderRightArrow() {
    return (
      <Image
        source={require("../../assets/arrow_right.png")}
        style={styles.leftArrow}
      />
    );
  }

  render() {
    const { loading, selectedImageIndex, selectedImagesArray } = this.props;
    console.log(loading, selectedImageIndex, selectedImagesArray);

    if (loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating />
        </View>
      );
    }
    return (
      <View style={styles.container}>
      
        {this.renderLeftArrow()}

        <Image
          source={{ uri: selectedImagesArray[selectedImageIndex].thumbnail }}
          style={styles.image}
        />

        {this.renderRightArrow()}
      </View>
    );
  }
}

DetailsComponent.propTypes = {
  selectedImageIndex: PropTypes.number,
  loading: PropTypes.bool,
  selectedImagesArray: PropTypes.array
};

function mapStateToProps(state) {
  return {
    loading: state.dataReducer.loading,
    selectedImagesArray: state.dataReducer.selectedImagesArray,
    selectedImageIndex: state.dataReducer.selectedImageIndex
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row"
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    alignItems: "center"
  },
  leftArrow: {
    width: 50,
    height: 50,
    alignSelf: "center",
    alignItems: "center"
  },
  rightArrow: {
    width: 50,
    height: 50,
    alignSelf: "center",
    alignItems: "center"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsComponent);
