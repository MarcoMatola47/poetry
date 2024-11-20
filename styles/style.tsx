import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container Styles
  itemContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Heading Styles
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  heading2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
    textAlign: "center",
  },

  // Image Styles
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  // Summary Styles
  summaryContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: "#666",
  },
  AverageContainer: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },

  // Input Styles
  userInputView: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
  },
  inputdes: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
    height: 100,
  },

  // Button Styles
  sbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  buttonn: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "48%",
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // List Styles
  lifeStyle: {
    marginTop: 10,
  },
  lifeStyle3: {
    marginTop: 10,
    maxHeight: 300,
  },

  // Detail Text Styles
  workName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  OtherDetail: {
    fontSize: 14,
    color: "#4CAF50",
    marginBottom: 5,
    fontWeight: "bold",
  },
  OtherDetails: {
    fontSize: 16,
    color: "#666",
  },

  // Delete Button Styles
  deleteButton: {
    backgroundColor: "#F44336",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  // Additional Container
  cont: {
    marginVertical: 10,
    alignItems: "center",
  },
});
