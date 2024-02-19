# E-Commerce Back End Object-Relational Mapping (ORM)

![GitHub License](https://img.shields.io/badge/license-MIT-default.svg)

## Description

E-Commerce Back End Object-Relational Mapping (ORM) is an application back end for an e-commerce site.  It was built to take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.  This project solves the problem of wanting a back end for an e-commerce website that uses the latest technologies so that a company can compete with other e-commerce companies.  Some things learned throughout E-Commerce Back End Object-Relational Mapping (ORM) are understanding the many relationships between Sequelize models through association methods, making a folder with subfolders containing all of the different routes in Insomnia organizes later development tests, and Many-To-Many relationships are implemented using a junction table (called through table in Sequelize.)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [Deployed Site](#deployed-site)
* [Credits](#credits)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Features](#features)
* [Questions](#questions)

## Installation

Within the .env file, enter 'root' for DB_USER='' and 'MySQL Root Pasword' for DB_PASSWORD ='.'  This will protect the database, MySQL username, and MySQL password to an environment variable file and connect to a database using Sequelize.  To install E-Commerce Back End Object-Relational Mapping (ORM) dependencies, run "npm i" within the terminal of the main directory.  Then, create the schema from the MySQL shell by running "mysql -u root -p" within the terminal.  Enter 'MySQL ROOT Password' for "Enter password:."  Once connected, source the schema.sql with "source db/schema.sql;" inside of MySQL.  This will create the development database.  Enter "Quit" to end the MySQL connection.  Finally, seed the database by running "npm run seed" so that routes can be tested.

## Usage

To run this application, open the file up to the main directory and enter "npm start" within the terminal.  After the server is running, open up Insomnia Core and make API GET routes for categories, products, and tags.  Follow the model routes within the Index.js of the api folder and their file paths for each individual route to make local host connections on Insomnia Core.  After entering a url such as "http://localhost:3001/api/categories/" within the URL next to GET, then click "Send" and the data for each of these routes is displayed in a formatted JSON.  Following the same format, API POST, PUT, and DELETE routes can be tested which will create, update, and delete data from the database.  To GET Category by id, enter the url "http://localhost:3001/api/categories/1" with the example "1" as the category_id.  After clicking "Send," the Preview column on the right will find and display one category by its requested "id' value.  Using a POST method, enter "http://localhost:3001/api/categories/" within the URL and make sure that Body is changed to JSON.  Inside the field, make an object with example data '"category_name": "jazz music"' to create a new category.  Click "Send" and then the Preview will show the new category_name with its id value was added to the database.  Using a PUT method, enter "http://localhost:3001/api/categories/6" with the example "6" as the category_id to update.  Enter a new JSON object with example data '"category_name": "Socks"' to update a category by its 'id' value.  Click "Send" and the Preview will show that category_id was updated with new data.  Using a DELETE method, enter "http://localhost:3001/api/categories/6" within the URL with the example "6" as the category_id to delete.  Click "Send" and the Preview will show that category_id was deleted from the database.  These instructions can be used similarly for products and tags sequelize models to test GET, POST, PUT, and DELETE routes.

**Attached is a screenshot of GET, POST, PUT, and DELETE routes for CATEGORIES, TAGS, and PRODUCTS being tested in Insomnia Core:**

![Insomnia Core Route Testing](./Assets/images/E-Commerce%20Back%20End%20Insomnia%20Core%20Routes.png)

## Video

[E-Commerce Back End Object-Relational Mapping (ORM) Walkthrough](https://screenrec.com/share/lfHR6eXM8m)

## Deployed Site

N/A

## Credits

[Valedations & Constraints | Sequelize](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)

[Default Values | Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/#default-values)

[Associations | Sequelize](https://sequelize.org/docs/v6/core-concepts/assocs/)

[Model Querying](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)

[Table Relationships in Sequelize](https://levelup.gitconnected.com/table-relationships-in-sequelize-2e2533580c2a)

## Contributing

N/A

## License

MIT License

Copyright (c) 2024 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

* (https://choosealicense.com/licenses/mit/)

## Tests

N/A

## Features

Node.js, npm (node package manager), express.js 4.18.2, inquirer 8.2.4, MySQL2 2.3.3, dotenv 8.6.0, sequelize 5.22.5, nodemon 2.0.3, Insomnia Core 8.6.1

## Questions

If you have any questions, please visit [GitHub/Tyler-KD](https://github.com/Tyler-KD) or submit questions to tyler.kd.knapp@gmail.com.