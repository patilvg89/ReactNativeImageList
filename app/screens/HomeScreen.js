import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View>
      <Text>Home Screen</Text>
    </View>
  </View>
);

HomeScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF44"
  }
});

export default HomeScreen;
