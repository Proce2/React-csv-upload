# Project Name

Test

## Installation

1. Clone the repository.
2. Install the required dependencies by running the following command:

npm install

## Usage

### Node.js Server

1. Start the Node.js server by running the following command in the project directory:

node index.js

   This will start the Node.js server on port 3000.

2. The Node.js server will handle the API endpoints for file upload, searching users, and deleting data.

3. You can access the API endpoints through `http://localhost:3000/api/`.

### React Frontend

1. Start the React development server by running the following command in the project directory:

npm start

   This will start the React development server on port 3001.

2. Open your web browser and navigate to `http://localhost:3001`.

3. Upload a CSV file by clicking on the "Upload CSV" button.

4. Enter a search term in the input field and click on the "Search" button to search for users based on the entered term.

5. The search results will be displayed below the search input field.

## Automated Testing

To run the automated tests, follow these steps:

1. Make sure the server is running.

2. Open a terminal or command prompt.

3. Navigate to the project directory.

4. Run the following command to execute the tests for `Api.test.js`:

npm test Api.test.js

5. Run the following command to execute the tests for `App.test.js`:

npm test App.test.js

This will run the specified test files and display the test results in the terminal or command prompt.
