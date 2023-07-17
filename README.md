[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11439584&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.

Initial idea:

My idea is to have balloons representing seconds 0-60, minutes 0-60, and hours 0-24. As time passes, the balloons inflate, until they reach a needle. When they reach their needle the balloons will burst and a new balloon will be created, starting another minute, hour, or day.

Maeda clock:

The Maeda clock I've chosen to recreate is clock 2 https://codingtrain.github.io/12oclocks/#clock-02. Mine is slightly different. I used an extra two rows of circles to represent my numbers, my numbers have slightly different shapes, and the stroke weight of the circles is a little thicker. I used a map of floats to arrays of integers, where n.1 goes to the array of x values for the circle positions and n.2 goes to the y values. I did this so that I could set up a function that takes a number and draws it in a given position. This method meant that drawing the ellipses was very simple, but there are many improvements I could make to simplify the code and make it easier to work with. The main problem is using values for the x and y coordinates instead of using a matrix for each number with on and off values. This would make more sense as they are already operating in fixed grid and it would be easier to change things such as the proximity of the circles, and the position of the whole display.