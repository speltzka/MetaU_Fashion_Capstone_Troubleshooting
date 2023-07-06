import './App.css'
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";

export default function App() {
  return (   
    <div className="container">
      <h1>Aesthetik.</h1>
        <Search />
        <Navbar />
  </div>
  )
}