import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DetailsComponent from "../components/details/DetailsComponent";

const DetailsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <DetailsComponent navigation={navigation} />
  </View>
);

DetailsScreen.propTypes = {};

DetailsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

export default DetailsScreen;
