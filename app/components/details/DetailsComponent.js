import React, { Component } from "react";
import {
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions";

class DetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading,
      selectedImagesArray: props.selectedImagesArray,
      selectedImageIndex: props.selectedImageIndex
    };
    console.log("props", this.props);
  }

  onBackPress() {
    this.props.navigation.goBack();
    this.props.selectedImages(null);
  }
  selectPreviousImage() {
    this.setState({ selectedImageIndex: this.state.selectedImageIndex - 1 });
  }

  selectNextImage() {
    this.setState({ selectedImageIndex: this.state.selectedImageIndex + 1 });
  }

  renderLeftArrow() {
    if (
      this.state.selectedImageIndex != 0 &&
      this.state.selectedImageIndex > 0
    ) {
      return (
        <TouchableOpacity
          onPress={this.selectPreviousImage.bind(this)}
          style={styles.container}
        >
          <Image
            source={require("../../assets/arrow_left.png")}
            style={styles.arrow}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            source={require("../../assets/arrow_left.png")}
            style={styles.arrowDisable}
          />
        </View>
      );
    }
  }

  renderRightArrow() {
    if (
      this.state.selectedImageIndex !=
      this.state.selectedImagesArray.length - 1
    ) {
      return (
        <TouchableOpacity
          onPress={this.selectNextImage.bind(this)}
          style={styles.container}
        >
          <Image
            source={require("../../assets/arrow_right.png")}
            style={styles.arrow}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            source={require("../../assets/arrow_right.png")}
            style={styles.arrowDisable}
          />
        </View>
      );
    }
  }

  render() {
    const { loading, selectedImageIndex, selectedImagesArray } = this.state;
    if (loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating />
        </View>
      );
    }
    return (
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          {this.renderLeftArrow()}

          <Image
            source={{ uri: selectedImagesArray[selectedImageIndex].thumbnail }}
            style={styles.image}
          />

          {this.renderRightArrow()}
        </View>

        <Button title={"Back"} onPress={this.onBackPress.bind(this)} />
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
  rootContainer: {
    flex: 1,
    flexDirection: "column"
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center"
  },
  arrow: {
    width: 50,
    height: 50,
    alignSelf: "center"
  },
  arrowDisable: {
    width: 50,
    height: 50,
    alignSelf: "center",
    tintColor: "#808080"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsComponent);
