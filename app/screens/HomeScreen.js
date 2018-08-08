import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Home from "../components/home/Home";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Home navigation={navigation} />
  </View>
);

HomeScreen.propTypes = {};

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF44"
  }
});

export default HomeScreen;
