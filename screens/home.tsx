import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { styles } from "../styles/style";
import { RootStackParamList, WorkoutDetails } from "../type/task.object";

type ScreenhomeProp = NativeStackScreenProps<RootStackParamList, "Screenhome">;
export const Screenhome: React.FC<ScreenhomeProp> = (props) => {
  const {
    average = {
      CardioAverage: 0,
      StrengthAverage: 0,
      FlexibilityAverage: 0,
      BalanceAverage: 0,
    },
  } = props.route.params || {};

  const [workouts, setWorkouts] = useState<WorkoutDetails[]>([]);
  const totalWorkouts = workouts.length;
  const totalCaloriesBurned = workouts.reduce(
    (sum, workout) => sum + workout.calories_Burned,
    0
  );

  return (
    <SafeAreaView style={styles.itemContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Fitness Tracker</Text>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryTextContainer}>
          <Text style={styles.summaryText}>
            Total Workouts: {totalWorkouts}
          </Text>
          <Text style={styles.summaryText}>
            Total Calories Burned: {totalCaloriesBurned}
          </Text>
        </View>

        <View style={styles.AverageContainer}>
          <Text style={styles.heading2}>
            Average Calories per Workout Type:
          </Text>
          <Text style={styles.summaryText}>
            Cardio: {average.CardioAverage}
          </Text>
          <Text style={styles.summaryText}>
            Strength: {average.StrengthAverage}
          </Text>
          <Text style={styles.summaryText}>
            Flexibility: {average.FlexibilityAverage}
          </Text>
          <Text style={styles.summaryText}>
            Balance: {average.BalanceAverage}
          </Text>
        </View>
      </View>

      <View style={styles.cont}>
        <Text style={styles.heading}>Workout Log</Text>
      </View>

      <FlatList
        style={styles.lifeStyle}
        data={workouts}
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

      <View style={styles.sbutton}>
        <TouchableOpacity
          style={styles.buttonn}
          onPress={() =>
            props.navigation.navigate("Screenaddworkout", {
              workouts,
              setWorkouts,
            })
          }
        >
          <Text style={styles.buttonText}>Add Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonn}
          onPress={() =>
            props.navigation.navigate("FilterScreen", { workouts, setWorkouts })
          }
        >
          <Text style={styles.buttonText}>Filter Workouts</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
