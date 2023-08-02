[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11439584&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.

Initial idea:

My idea is to have balloons representing seconds 0-60, minutes 0-60, and hours 0-24. As time passes, the balloons inflate, until they reach a needle. When they reach their needle the balloons will burst and a new balloon will be created, starting another minute, hour, or day.

Maeda clock:

The Maeda clock I've chosen to recreate is clock 2 https://codingtrain.github.io/12oclocks/#clock-02. Mine is slightly different. I used an extra two rows of circles to represent my numbers, my numbers have slightly different shapes, and the stroke weight of the circles is a little thicker. I used a map of floats to arrays of integers, where n.1 goes to the array of x values for the circle positions and n.2 goes to the y values. I did this so that I could set up a function that takes a number and draws it in a given position. This method meant that drawing the ellipses was very simple, but there are many improvements I could make to simplify the code and make it easier to work with. The main problem is using values for the x and y coordinates instead of using a matrix for each number with on and off values. This would make more sense as they are already operating in a fixed grid and it would be easier to change things such as the proximity of the circles, and the position of the whole display.

Original clock development:

I'm thinking about changing my clock idea, slightly. Rather than having three balloons I think it would be better to have one balloon at the end of a chain of actions that are causing it to inflate. I'm inspired by dozer machines that slowly push coins off an edge, moving them slightly further towards their tipping point as coins are added.

Changing ideas:

I've changed my plan completely. Now instead of balloons inflating, or a sort of dozer machine, I want to have cars slowly being loaded onto a ferry. I've started creating an ocean as a background for the clock, with small waves animated to move up and down every second. The next thing I want to do is start building the loading area, with cars slowly moving into the ferry.

Developing the ferry idea:

I've added a car object which has a number (representing minutes) and a hue (taken from a list of random numbers 1-100). My plan is to move cars along a path, reaching the ferry on the minute that corresponds to the number on the roof of the car, so car 20 will be loaded on to the ferry at 20 minutes past the hour. One suggestion was to make the cars get loaded on every second instead of every minute. This would make the clock have a lot more movement, so I will test how it looks.

Getting cars working:

Cars are now working. I created a Car class, where car objects have a number and a hue. I figured using a class would make it easier to make changes to cars if I need to, though as they are now it's probably unnecessary. I've also set up some maps so that cars move  smoothly towards their destination - which they reach at the correct time. The next thing I need to do is set up what happens on the hour, when the ferry leaves. It may be difficult to set it up in a way where the ferry can leave and return for the next set of cars within a minute. Originally I imagined that cars would build up a sort of queue while they were waiting for the ferry to return. This would work fine, however it would make it difficult to read the time.

Leading up to hand in:

I've decided to simplify some of my ideas to allow enough time to at least create a working clock. Originally I wanted the cars to be able to follow a curve, or make their way around a winding queue. This proved to be much more challenging than I expected, so I left them as just a linear move. It's something I'd like to revisit at some point, but for now it'll do as is. The other thing I wanted to do was make the chimneys display the seconds with smoke/steam clouds by puffing circles into the air to create the number shapes. My plan was to use the Maeda clock I recreated as reference for creating a system to draw the numbers from a grid. However, I simply didn't have time. 

Final clock:

My final clock uses cars with numbers on them to represent minutes. Every minute a car gets on the ferry at the end of the road - the numbered minute starts when the car is no longer visible and is completely onboard. For hours, there is a big white number on the ferry. This will stay the same until the ferry is off-screen, indicating that the next ferry is a different one entirely. There is a small window while the ferry is leaving for about 10 seconds where the next hour has started but you can't see the next ferry with the new hour yet. This was a small compromise to create the effect I wanted. For seconds, numbers are emitted from the ship's chimneys like smoke/steam, growing as they go up the chimney before fading away.

I also created a simple animated wave which is repeated multiple times in the background to add some more movement. The waves are animated over a second exactly, so they are a sort of tick. Finally to add an extra layer, I added a simple day/night cycle by creating a global brightness variable which is at its brightest at 12pm and its darkest at 12am.

The alarm is a swaying motion across all the elements, as well as the waves growing in size for the duration.

Overall I'm very happy with the outcome. It's essentially what I had envisioned, despite having to reduce the scope quite a lot. It's also a lot more involved than my original idea which was to simply have balloons inflating over the different time periods. If I were to do it again I think I'd try to use a different perspective, or use images for each element, as I did them all in code and it was a real challenge.


