import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import { styles } from "../constants/Styles";
import { nameToPic } from "../constants/Constants";
import { useEffect } from "react";
import { shuffle } from "../utils/ArrayUtils";
const names = Object.keys(nameToPic);

export default function GameScreen() {
  // TODO: Declare and initialize state variables here, using "useState".
  const [currNames, setCurrNames] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [imagePath, setImagePath] = useState("");
  const [numTotal, setNumTotal] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  // State for the timer is handled for you.
  const [timeLeft, setTimeLeft] = useState(5000);

  // Called by the timer every 10 seconds
  const countDown = () => {
    if (timeLeft > 0) {
      // Time still left
      // TODO: update appropriate state variables
      setTimeLeft(timeLeft - 10);
    } else {
      // Time has expired
      // TODO: update appropriate state variables
      setNumTotal(numTotal + 1);
    }
  };

  // This is used in the useEffect(...) hook bound on a specific STATE variable.
  // It updates state to present a new member & name options.
  const getNextRound = () => {
    // Fetches the next member name to guess.
    let correct = names[Math.floor(Math.random() * names.length)];
    let correctName = nameToPic[correct][0];
    let correctImage = nameToPic[correct][1];

    // Generate 3 more wrong answers.
    let nameOptions = [correctName];
    while (nameOptions.length < 4) {
      let wrong = names[Math.floor(Math.random() * names.length)];
      let wrongName = nameToPic[wrong][0];
      if (!nameOptions.includes(wrongName)) {
        nameOptions.push(wrongName);
      }
    }
    nameOptions = shuffle(nameOptions);

    // TODO: Update state here.
    setCurrNames(nameOptions);
    setCorrectIndex(nameOptions.indexOf(correctName));
    setImagePath(correctImage);
    setTimeLeft(5000);
  };

  // Called when user taps a name option.
  // TODO: Update correct # and total # state values.
  const selectedNameChoice = (index) => {
    setNumTotal(numTotal + 1);
    if (index === correctIndex) {
      setNumCorrect(numCorrect + 1);
    }
  };

  useEffect(() => {
    /* TODO: Call the countDown() method every 10 milliseconds */
    //https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
    const interval = setInterval(() => countDown(), 10);
    return () => clearInterval(interval);
   }
  );

  // TODO: Finish this useEffect() hook such that we automatically
  // get the next round when the appropriate state variable changes.
  useEffect(() => {
      getNextRound();
    }, [numTotal]
  );

  // Set up four name button components
  const nameButtons = [];
  for (let i = 0; i < 4; i++) {
    const j = i;
    nameButtons.push(
      // TODO: Implement a Button/Pressable type that shows a name choice, and implement the functionality when a user press on it
      // Hint: Most functionality is already taken care of by one of the functions already defined
      //<Button style={styles.button} onClick={selectedNameChoice(j) }> {allNames[j]} </Button>
      <TouchableOpacity
        style={styles.button}
        onPress={ () => selectedNameChoice(j)}
      >
        <Text style={styles.buttonText}>{currNames[j]}</Text>
      </TouchableOpacity>
    );
  }

  const timeRemainingStr = (timeLeft / 1000).toFixed(2);

  // Style & return the view.
  return (
    <View style={styles.container}>
      {/* TODO: Build out your UI using Text and Image components. */}
      {/* Hint: What does the nameButtons list above hold? 
          What types of objects is this list storing?
          Try to get a sense of what's going on in the for loop above. */}
          <Text style={styles.scoreText}>Current Score: {numCorrect} / {numTotal}</Text>
          <Text style={styles.timerText}>Time Remaining: {timeRemainingStr}</Text>
          <Image source={imagePath} style={styles.image} />
          {nameButtons[0]}
          {nameButtons[1]}
          {nameButtons[2]}
          {nameButtons[3]}
    </View>
  );
}
