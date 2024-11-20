import React from "react";

export type WorkoutDetails = {
  workout_Name: string;
  duration: number;
  exercise_Type: string;
  calories_Burned: number;
};

export type RootStackParamList = {
  Screenhome: {
    average: {
      CardioAverage: number;
      StrengthAverage: number;
      FlexibilityAverage: number;
      BalanceAverage: number;
    };
  };
  FilterScreen: {
    workouts: WorkoutDetails[];
    setWorkouts: React.Dispatch<React.SetStateAction<WorkoutDetails[]>>;
  };
  Screenaddworkout: {
    workouts: WorkoutDetails[];
    setWorkouts: React.Dispatch<React.SetStateAction<WorkoutDetails[]>>;
  };
};
