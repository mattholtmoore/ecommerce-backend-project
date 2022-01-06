# E-Commerce Back End

***

## Table of Contents
- [Description](#description)  
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)  
- [Visuals](#visuals)
- [Questions](#questions)

***

## Description
This is the back end for an e-commerce site using the latest technologies so that a company can compete with other e-commerce companies. It is built by configuring a working Express.js API and using Sequelize to interact with a MySQL database.

Given a functional Express.js API, when the user adds their database name, MySQL username, and MySQL password to an environment variable file then they are able to connect to a database using Sequelize.When they enter schema and seed commands then a development database is created and is seeded with test data. When they enter the command to invoke the application then their server is started and the Sequelize models are synced to the MySQL database. When they open API GET routes in Insomnia for categories, products, or tags then the data for each of these routes is displayed in a formatted JSON.
When they test API POST, PUT, and DELETE routes in Insomnia then they are able to successfully create, update, and delete data in their database.

***

## Installation
To install, run this command: `npm i`.

***

## Usage
Begin by running `mysql -u root` to open MySQL database within the terminal. 

Run `source db/schema.sql` while in the root directory. 

Seed the database by running `npm run seed`. 

Start server by running the `nodemon` command.


***

## Links
[Link to GitHub](https://github.com/mattholtmoore/ecommerce-backend-project)  

[Link to Walkthrough Capture](https://watch.screencastify.com/v/az4OjlhprluwfL9LDaSe)

***

## Visuals
![ecommerce-backend-project](assets/ecommerce-backend.gif "ecommerce-backend-project")

***

## Questions
If you have any questions at all, please email me at: mattholtmoore@gmail.com

You can also find me on GitHub at: https://www.github.com/mattholtmoore
