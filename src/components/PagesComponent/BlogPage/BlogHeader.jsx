import React, { useState, useEffect } from 'react';

function BlogHeader() {
  // Step 1: Define initial state to store the fetched data
  const [jsonData, setJsonData] = useState(null);

  // Step 2: Create a function to fetch JSON data
  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/1');
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Step 3: Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>JSON Data from dummyJSON</h1>

      {/* Step 4: Render a button to fetch data when clicked */}
      <button onClick={fetchData}>Fetch Data</button>

      {/* Step 5: Display the fetched data */}
      {jsonData ? (
        <pre>{JSON.stringify(jsonData)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default BlogHeader;
