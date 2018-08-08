import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DetailsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View>
      <Text>Details Screen</Text>
    </View>
  </View>
);

DetailsScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF44"
  }
});

export default DetailsScreen;
