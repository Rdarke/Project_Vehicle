# Express Server - Getting Started

Create the .env by using .env.example as a reference: cp .env.example .env Update the .env file with your correct local information

- username: labber
- password: labber
- database: project_vehicle
- Port etc...

Install dependencies: npm i

Reset database: npm run db:reset

Check the db folder to see what gets created and seeded in the SDB Run the server: npm run local

Note: nodemon is used, so you should not have to restart your server Visit http://localhost:8080/