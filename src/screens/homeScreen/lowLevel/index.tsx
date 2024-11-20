
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './style';
const LowLevel = () => {

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [timer, setTimer] = useState(0);

  const handleResendOtp = () => {
    setTimer(30);
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);


  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let question = '';
    let answer = 0;
    switch (operation) {
      case '+':
        question = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
      case '-':
        question = `${num1} - ${num2}`;
        answer = num1 - num2;
        break;
      case '*':
        question = `${num1} * ${num2}`;
        answer = num1 * num2;
        break;
      case '/':
        question = `${num1} / ${num2}`;
        answer = num1 / num2;
        break;
    }
    return { question, answer };
  };

  const generateQuiz = () => {
    const quiz = [];
    for (let i = 0; i < 10; i++) {
      quiz.push(generateQuestion());
    }
    setQuestions(quiz);
  };

  useEffect(() => {
    generateQuiz();
  }, []);


  const handleAnswerSubmit = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
    setUserAnswer('');
    handleResendOtp();
  };


  const restartQuiz = () => {
    setScore(0);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setIsAnswerCorrect(null);
    generateQuiz();
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Math Quiz</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
        {!quizFinished ? (
          <View style={styles.quizContainer}>
            <Text style={styles.questionText}> Question {currentQuestionIndex + 1}: </Text>
            <Text style={styles.question}> {questions[currentQuestionIndex]?.question} </Text>

            <View style={styles.timer}>
              <Text >
                {timer > 0 ? `Timer in 00:${timer < 10 ? `0${timer}` : timer}` : ""}
              </Text>
            </View>

            <TextInput
              style={[styles.input, isAnswerCorrect === null ? {} : isAnswerCorrect ? styles.correct : styles.incorrect,]}
              placeholder="Your Answer"
              keyboardType="numeric"
              value={userAnswer}
              onChangeText={setUserAnswer} />

            <TouchableOpacity style={styles.submitButton} onPress={handleAnswerSubmit} >
              <Text style={styles.submitText}>Submit Answer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.quizContainer}>
            <Text style={styles.resultText}> Quiz Finished! Your Score: {score} / {questions.length} </Text>
            <Button title="Restart Quiz" onPress={restartQuiz} />
          </View>
        )}

      </View>
    </SafeAreaView>
  );
};


export default LowLevel;



