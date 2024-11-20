import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { styles } from "../styles/style";
import { RootStackParamList, WorkoutDetails } from "../type/task.object";

type FilterScreenProp = NativeStackScreenProps<
  RootStackParamList,
  "FilterScreen"
>;
export const FilterScreen: React.FC<FilterScreenProp> = (props) => {
  const [selectedExercise, setSelectedExercise] = useState<string>("All");
  const [filteredWorkoutList, setFilteredWorkoutList] = useState<
    WorkoutDetails[]
  >(props.route.params.workouts);

  const ExerciseTypes = ["All", "Cardio", "Strength", "Flexibility", "Balance"];

  const handleFilter = (type: string) => {
    setSelectedExercise(type);
    if (type === "All") {
      setFilteredWorkoutList(props.route.params.workouts);
    } else {
      const filteredList = props.route.params.workouts.filter(
        (workout) => workout.exercise_Type === type
      );
      setFilteredWorkoutList(filteredList);
    }
  };

  return (
    <SafeAreaView style={styles.itemContainer}>
      <View style={styles.userInputView}>
        <Text style={styles.heading}>Filter Workouts</Text>
        <Picker
          selectedValue={selectedExercise}
          onValueChange={handleFilter}
          style={styles.input}
        >
          {ExerciseTypes.map((i) => (
            <Picker.Item label={i} value={i} key={i} />
          ))}
        </Picker>
      </View>

      <View>
        <FlatList
          style={styles.lifeStyle3}
          data={filteredWorkoutList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.OtherDetail}>{item.exercise_Type}</Text>
              <Text style={styles.workName}>Workout: {item.workout_Name}</Text>
              <Text style={styles.OtherDetails}>
                Duration: {item.duration} min
              </Text>
              <Text style={styles.OtherDetails}>
                Calories Burned: {item.calories_Burned}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
