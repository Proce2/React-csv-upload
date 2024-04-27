# React-csv-upload

A basic web app built with Node.js and React that uses Express for handling uploads, NeDB for storing data, and csv-parse to process CSV files.

## How to install


### Prerequisites

Check if you have the right versions for this project, as listed in the `package.json`.


```bash
node --version
npm --version
```

### Installation

Clone the repository and install dependencies `npm install`

## Usage


### Node

To start the server, run:

```bash
node index.js
```

The server will listen on port 3000 for requests.

### React Frontend

To start the React frontend, run:

```bash
npm start
```

Then, open http://localhost:3001 in your browser.

### Using the React Frontend

-   **Upload a CSV File**: Click the "Upload CSV" button to select and upload a file. 
    
-   **Search Users**: Enter a search term in the input field and click on the "Search" button or press enter to retrieve users based on the entered criteria.
    

### Backend Interaction

-   **Delete All Data**: To clear all data from the database, you can use the following curl command to send a DELETE request to the backend, as this functionality is managed directly via API:

```bash
curl -X DELETE http://localhost:3000/api/files
```
    
## Testing

To run the automated tests, follow these steps:

1. Make sure the server is running.
2. Open a terminal or command prompt.
3. Navigate to the project directory.
4. Run the following command to execute the tests for `Api.test.js`:

```bash
npm test Api.test.js
```

5. Run the following command to execute the tests for `App.test.js`:

```bash
npm test App.test.js
```

This will run the specified test files and display the test results in the terminal or command prompt.





