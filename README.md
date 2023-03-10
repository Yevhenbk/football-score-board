# Football Score Board

This project represents a Score Board that allows you to:
  - See the game board once one of the buttons gets pressed
  - Finish the game if you decide so
  - Update the score of Home/Away team
  - See all matches you start in ordered way

This application applies S.O.L.I.D, OOP, and Clean Code principles:
  - SOLID: The code follows the Single Responsibility Principle (SRP) by having separate functions and components for different responsibilities. For example, the  "startGame," "finishGame," and "updateScore" functions are responsible for game-related functionality, and the "MatchItem" and "DotElement" components are responsible for rendering the UI. The code also uses the Context API to manage the state, which follows the Open-Closed Principle (OCP) by allowing components to access the state without modifying it directly
  - OOP: The code uses object-oriented programming (OOP) concepts by defining objects with classes and interfaces. For example, the "Match" and "GameData" objects are defined with interfaces to ensure type safety and consistency throughout the codebase. Additionally, the "Button," "DotElement," and "MatchItem" components are defined with classes that can be reused throughout the codebase
  - Clean Code: The code follows clean code principles by using descriptive variable and function names, separating concerns, and avoiding unnecessary complexity. For example, the "HomeTemplate" component is responsible for rendering the UI, and it imports components and functions from other modules to keep the code modular and maintainable. The code also uses consistent formatting and indentation, making it easy to read and understand

> To start the app run this command inside the project

```bash
npm run dev #runs the app in the development mode
```

## Project preview

![Preview image 1](https://github.com/Yevhenbk/football-score-board/blob/main/public/screen.png)

