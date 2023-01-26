import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

function CustomButton(props) {
  return (
    <Pressable onPress={props.onPress}>
      <View style={props.color === undefined ? styles.button : {...styles.button, backgroundColor: props.bg.toString()}}>
        <Text style={props.textColor === undefined ? styles.text : {...styles.text, color: props.color.toString()}}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#2319e3",
        borderRadius: 16,
        height: 50,
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 16,
        color: "white"
    }
})

export default CustomButton;
