import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
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
      <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <Text>
          {"Selected ImageIndex= "}
          {selectedImageIndex + 1}
        </Text>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsComponent);
