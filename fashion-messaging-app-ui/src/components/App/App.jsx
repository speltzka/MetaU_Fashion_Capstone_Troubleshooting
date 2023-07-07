import "./App.css"
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { createClient } from "pexels";

const client = createClient("06ZcwjgbmJBM8T2TxLUZ5iwdXXGxiAgz0Z018b7QPKwR1ExipkFjaAuw");
const query = "Fashion";
const numberOfPhotos = 100;

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    client.photos.search({ query, per_page: numberOfPhotos })
      .then(response => {
        setPhotos(response.photos);
      })
      .catch(error => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  return (
    <div>
      <div className="container">
       <h1>Aesthetik.</h1>
       <Search />
       <Navbar />
      </div>       
    </div> 
  );
}

export default App;
