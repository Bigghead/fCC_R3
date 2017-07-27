# Fccr3

The tentative full name of this project is FreeCodeCamp (fCC) Community Resources Review. Although it borrows the name from fCC as source of inspiration and origin, this project is NOT currently in direct connection with the organization (www.freecodecamp.org).

## Description

The project mission is to offer users, in principle new developers, a curated list of relevant resources to learn programming.

This repository of the project shows the advances of the frontend work. This project is a Proof of Concept.

The resources (`platforms`) are relevant online content mentioned by fCC social media users. The main sources from where the data is being currently extracted are fCC chatrooms.

Specific information about each platform is extracted either from fCC chatrooms, the platform itself or even other sources. The platforms also receive a `category` that allows to distinguish the platform's main mission. 

Data is saved in Firebase.

The data is first rendered as a searchable list ranked according to platform's relevance when queried by `subjects` or topics. Subjects are defined based on the fCC curriculum found in the current beta version of the fCC website (https://beta.freecodecamp.com/en/map).

The rendering allows different kind of comparisons between some of the platforms. Some collected data about each platform are presented in a more detailed format.

This project is being approached using Kanban methodology (https://realtimeboard.com/blog/choose-between-agile-lean-scrum-kanban/#.WW5nlh9Nybk).

## Installation

Currently the project is not deployed but it is possible to get a first view in your local browser if you have the requirements.

This section of the project is done using [node.js](https://nodejs.org/en/) and [Angular](https://angular.io/). We rely on node.js' npm and [angular-cli 1.2.0](https://github.com/angular/angular-cli) as main installation tools.

The project is also been created under *UNIX-like operating systems*.

To inspect how the project looks in the browser you might require to have node.js installed, and possibly angular-cli.

Having those requirements, and assuming you also share a UNIX operating system and navigate using a shell,
* clone and extract this repository
* move to your newly created directory
* once inside the directory, run `npm install`
* if you have angular-cli installed, run `ng serve` and navigate through the address `http//:localhost:4200` on your browser

## Related projects

For more information about the associated advances in data mining, analysis and machine learning, please visit this repository: https://github.com/evaristoc/fCC\_R3\_DataAnalysis (currently under construction).

We recently started an exploratory module to interact with Slack. If you are interested please visit the following repository: https://github.com/evaristoc/fCC\_R3\_ChinguModule (currently under construction).
