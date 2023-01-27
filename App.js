import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CustomButton from "./zzcomonents/CustomButton";
import InputContainer from "./zzcomonents/InputContainer";
import SingleGoalContainer from "./zzcomonents/SingleGoalContainer";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisibility, setmodalVisibility] = useState(false);

  const setModalVisible = () => {
    setmodalVisibility(true);
  };

  const setModalInvisible = () => {
    setmodalVisibility(false);
  };

  const addGoalHandler = (newGoalText) => {
    setGoals((goals) => [...goals, { id: Math.random(), text: newGoalText }]);
    setModalInvisible();
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((goals) => goals.filter((goal) => goal.id !== goalId));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <InputContainer
          visible={modalVisibility}
          addGoalHandler={addGoalHandler}
          onCancel={setModalInvisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <SingleGoalContainer
                  goalText={itemData.index + 1 + ". " + itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.id}
                ></SingleGoalContainer>
              );
            }}
          />
        </View>
        <View style={styles.button}>
          <CustomButton
            bg="#e31baa"
            color="white"
            text="Yeni Görev Ekle"
            onPress={setModalVisible}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    flex: 1,
  },
  goalsContainer: {
    flex: 10,
    paddingTop: 17,
    paddingHorizontal: 10,
  },
  button: {
    marginVertical: 15,
    marginHorizontal: 5,
  },
});
