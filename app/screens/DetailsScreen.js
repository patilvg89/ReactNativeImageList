import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DetailsComponent from "../components/details/DetailsComponent";

const DetailsScreen = ({ navigation, props }) => (
  <View style={styles.container}>
    <DetailsComponent navigation={navigation} props={props} />
  </View>
);

DetailsScreen.propTypes = {};

DetailsScreen.navigationOptions = {
  title: "Details"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF44"
  }
});

export default DetailsScreen;
