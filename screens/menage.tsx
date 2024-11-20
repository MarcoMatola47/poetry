import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { styles } from "../styles/style";
import { RootStackParamList, WorkoutDetails } from "../type/task.object";

type ScreenaddworkoutProp = NativeStackScreenProps<
  RootStackParamList,
  "Screenaddworkout"
>;
export const Screenaddworkout: React.FC<ScreenaddworkoutProp> = (props) => {
  const [workouts, setWorkouts] = useState<WorkoutDetails[]>(
    props.route.params?.workouts
  );
  const [workoutName, setWorkoutName] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [exerciseType, setExerciseType] = useState<string>("");
  const [caloriesBurned, setCaloriesBurned] = useState<string>("");

  const ExerciseTypes = ["Cardio", "Strength", "Flexibility", "Balance"];

  function handleRemoval(index: number): void {
    const updateWorkouts = [...workouts];
    updateWorkouts.splice(index, 1);
    setWorkouts(updateWorkouts);
    props.route.params.setWorkouts(updateWorkouts);

    const average = calculateAverage(updateWorkouts);
    props.navigation.navigate("Screenhome", { average });
  }

  const calculateAverage = (workouts: WorkoutDetails[]) => {
    let totalCardio = 0,
      countCardio = 0;
    let totalStrength = 0,
      countStrength = 0;
    let totalFlexibility = 0,
      countFlexibility = 0;
    let totalBalance = 0,
      countBalance = 0;

    workouts.forEach((workout) => {
      if (workout.exercise_Type === "Cardio") {
        totalCardio += workout.calories_Burned;
        countCardio += 1;
      } else if (workout.exercise_Type === "Strength") {
        totalStrength += workout.calories_Burned;
        countStrength += 1;
      } else if (workout.exercise_Type === "Flexibility") {
        totalFlexibility += workout.calories_Burned;
        countFlexibility += 1;
      } else if (workout.exercise_Type === "Balance") {
        totalBalance += workout.calories_Burned;
        countBalance += 1;
      }
    });

    return {
      CardioAverage: countCardio > 0 ? totalCardio / countCardio : 0,
      StrengthAverage: countStrength > 0 ? totalStrength / countStrength : 0,
      FlexibilityAverage:
        countFlexibility > 0 ? totalFlexibility / countFlexibility : 0,
      BalanceAverage: countBalance > 0 ? totalBalance / countBalance : 0,
    };
  };

  const handleSubmit = () => {
    if (
      workoutName &&
      duration &&
      exerciseType &&
      caloriesBurned &&
      parseInt(caloriesBurned) > 0
    ) {
      const newWorkout: WorkoutDetails = {
        workout_Name: workoutName,
        duration: parseInt(duration),
        exercise_Type: exerciseType,
        calories_Burned: parseInt(caloriesBurned),
      };

      const updateWorkouts = [...props.route.params.workouts, newWorkout];
      props.route.params.setWorkouts(updateWorkouts);
      props.navigation.goBack();

      const average = calculateAverage(updateWorkouts);
      props.navigation.navigate("Screenhome", { average });

      // Reset form
      setWorkoutName("");
      setDuration("");
      setExerciseType("");
      setCaloriesBurned("");
    } else if (parseInt(caloriesBurned) <= 0) {
      Alert.alert("Incorrect input", "Calories burned must be greater than 0", [
        { text: "OK" },
      ]);
    } else {
      Alert.alert("Incomplete form", "Please fill all the fields", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.itemContainer}>
      <View style={styles.userInputView}>
        <Text style={styles.heading}>Add Workout</Text>
        <Picker
          selectedValue={exerciseType}
          onValueChange={(itemValue) => setExerciseType(itemValue)}
          style={styles.input}
        >
          {ExerciseTypes.map((type) => (
            <Picker.Item label={type} value={type} key={type} />
          ))}
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Workout Name"
          value={workoutName}
          onChangeText={setWorkoutName}
        />

        <TextInput
          style={styles.input}
          placeholder="Duration (minutes)"
          keyboardType="numeric"
          value={duration}
          onChangeText={setDuration}
        />

        <TextInput
          style={styles.input}
          placeholder="Calories Burned"
          keyboardType="numeric"
          value={caloriesBurned}
          onChangeText={setCaloriesBurned}
        />

        <TouchableHighlight onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Save Workout</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.cont}>
        <Text style={styles.heading}>Remove Workout</Text>
      </View>

      <FlatList
        style={styles.lifeStyle3}
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.OtherDetail}>{item.exercise_Type}</Text>
            <Text style={styles.workName}>{item.workout_Name}</Text>
            <Text style={styles.OtherDetails}>
              Duration: {item.duration} min
            </Text>
            <Text style={styles.OtherDetails}>
              Calories: {item.calories_Burned}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleRemoval(workouts.indexOf(item))}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
