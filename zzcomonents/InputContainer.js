import React from "react";
import { useState } from "react";
import { StyleSheet, View, TextInput, Modal } from "react-native";
import CustomButton from "./CustomButton";

function InputContainer(props) {
  const [enteredText, setEnteredText] = useState("");

  const enteredTextHandler = (textInTextInput) => {
    setEnteredText(textInTextInput);
  };

  const addGoalHandler = () => {
    if (enteredText.trim().length > 0) {
      props.addGoalHandler(enteredText);
      setEnteredText("");
    }
  };

  const onCancel = () => {
    props.onCancel();
    setEnteredText("");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add new goal!!!"
          placeholderTextColor="#c3c5c7"
          onChangeText={enteredTextHandler}
          value={enteredText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <CustomButton
              bg="#f52e27"
              color="white"
              text="Cancel"
              onPress={onCancel}
            />
          </View>
          <View style={styles.singleButtonContainer}>
            <CustomButton
              bg="#32fa3c"
              color="white"
              text="Add Goal"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 3,
    justifyContent: "center",
    padding: 10,
  },
  textInput: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 8,
    height: 50,
    alignSelf: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  singleButtonContainer: {
    width: "40%",
    marginTop: 5,
    marginHorizontal: 5,
  },
});

export default InputContainer;
