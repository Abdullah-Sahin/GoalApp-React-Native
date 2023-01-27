import React from "react";
import { useState } from "react";
import { StyleSheet, View, TextInput, Modal, Image } from "react-native";
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
        <Image
          source={require("../assets/images/hedef.jpg")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Yeni Görevim..."
          placeholderTextColor="#f5bae4"
          onChangeText={enteredTextHandler}
          value={enteredText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <CustomButton
              bg="#f52e27"
              color="white"
              text="İPTAL"
              onPress={onCancel}
            />
          </View>
          <View style={styles.singleButtonContainer}>
            <CustomButton
              bg="#e31baa"
              color="white"
              text="EKLE"
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
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#780c59",
  },
  textInput: {
    width: "90%",
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: "#f7e9f3",
    color: "#f7e9f3",
    marginBottom: 10,
    padding: 8,
    height: 50,
    alignSelf: "center",
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
  image: {
    alignSelf: "center",
    marginHorizontal: 10,
    marginBottom: 60,
    width: "90%",
    height: "30%"
  },
});

export default InputContainer;
