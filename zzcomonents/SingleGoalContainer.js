import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function SingleGoalContainer(props) {
  return (
    <View style={styles.singleGoalContainer}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.deleteGoalHandler.bind(this, props.id)}
        style={(object) => object.pressed && styles.whenPressed}
      >
        <Text style={styles.singleGoalText}>{props.goalText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  singleGoalContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    height: 50,
  },
  singleGoalText: {
    padding: 4,
    height: "95%",
    textAlignVertical: "center"
  },
  whenPressed: {
    opacity: "40%"
  }
});

export default SingleGoalContainer;
