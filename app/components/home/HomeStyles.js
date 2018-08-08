import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  row: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    flexDirection: "row"
  },

  title: {
    fontSize: 15,
    fontWeight: "600"
  },

  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    alignSelf: "center"
  }
});

export default styles;
