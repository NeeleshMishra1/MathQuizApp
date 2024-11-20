import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
    backgroundColor: "#fdff8f",
  },
  main: {
    padding: 20,
    backgroundColor: "#fdff8f",
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "900"
  },
  scoreContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  scoreText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  quizContainer: {
    marginTop: 50,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "700"
  },
  question: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: "700"
  },
  input: {
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#dbfcff"
  },
  correct: {
    backgroundColor: 'green',
  },
  // incorrect: {
  //   backgroundColor: 'red',
  // },
  resultText: {
    fontSize: 20,
    marginVertical: 20,
  },
  submitButton: {
    backgroundColor: "#0b4fbd",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    color: "white",
    fontSize: 22,
    fontWeight: "800"
  },
  timer: {
    position: "absolute",
    right: 0,
  },

});

export default styles;