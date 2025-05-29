// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

// defining my function for the button
function myButtonClicked() {
  let n = parseInt(document.getElementById("user-input").value);
  let sum = 0; 

  // loop 
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }

  // display the answer
  document.getElementById("answer").innerHTML = "<p>The sum of squares of the first " + n + " number is: " + sum + " .</p>"; 
}
