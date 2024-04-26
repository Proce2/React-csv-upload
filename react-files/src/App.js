import React, { useState, useRef  } from "react";
import axios from "axios";
import './App.css';


function App() {
  // State variables for file, search term, and search results
  const fileInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  
  // Handler for file upload
  const onFileUpload = () => {
    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);

    // Post request to upload the file
    axios.post("http://localhost:3000/api/files", formData)
    .then((response) => console.log(response))
    .catch((error) => console.error('There was an error!', error));;
  };

  // Handler for search
  const onSearch = () => {
   // Create a regular expression pattern for the search term
  const searchTermPattern = new RegExp(search, "i");

  // Get request to search users by query
  axios.get(`http://localhost:3000/api/users`)
    .then((response) => {
      // Filter the data based on the search term pattern
      const filteredData = response.data.data.filter((row) => {
        // Check if any of the fields match the search term pattern
        return (
          searchTermPattern.test(row.name) ||
          searchTermPattern.test(row.city) ||
          searchTermPattern.test(row.country) ||
          searchTermPattern.test(row.favorite_sport)
        );
      });

      setData(filteredData);
    })
    .catch((error) => console.error('There was an error!', error));
};

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    onSearch();
  }
};

  // Return the JSX to render
  return(
    <div className="container">
    <div className="upload-search-box">
      {/* File input for uploading CSV */}
      <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={onFileUpload}/>
      <button onClick={() => fileInputRef.current.click()}>Upload CSV</button>
      
      {/* Input and button for search */}
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>
      <button onClick={onSearch}>Search</button>
      </div>
     
      {/* Displaying search results */}
      <div className="cards">
      {data.map((row, index) => (
       <div key={index} className="card">
         <p>Name: {row.name}</p>
         <p>City: {row.city}</p>
         <p>Country: {row.country}</p>
         <p>Favorite Sport: {row.favorite_sport}</p>
       </div>
     ))}
     </div>
    </div>
  )
}

export default App;