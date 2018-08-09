import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions";
import styles from "./HomeStyles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  onRowSelect = (item, index) => {
    console.log(item, index);
    this.props.imageIndex(index); // set selected image position
    this.props.selectedImages(this.props.data); // set array of selected images

    this.props.navigation.dispatch({ type: "DetailsScreen" }); // navigate to new screen
  };

  renderItem({ item, index }) {
    return (
      <TouchableOpacity onPress={this.onRowSelect.bind(this, item, index)}>
        <View style={styles.row}>
          <Image
            style={styles.thumbnail}
            resizeMode={Image.resizeMode.contain}
            source={{ uri: item.thumbnail }}
          />
          <View style={styles.column}>
            <Text style={styles.title}>
              {"id:"} {parseInt(index, 10) + 1}
            </Text>
            <Text style={styles.title}>
              {"Name:"} {item.name}
            </Text>
            <Text style={styles.title}>
              {"Price:"} {item.price} {" ₹"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { loading, data } = this.props;
    console.log(loading, data);
    if (loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

Home.propTypes = {
  getData: PropTypes.func,
  loading: PropTypes.bool,
  data: PropTypes.array
};

function mapStateToProps(state) {
  return {
    loading: state.dataReducer.loading,
    data: state.dataReducer.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
