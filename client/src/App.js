import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./component/search";
import Table from "./component/table";

const base_url = process.env.React_APP_API_URL;

function App() {
  const [obj, setObj] = useState({});
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, SetSort] = useState({ sort: "rating", order: "desc" });

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${
          sort.order
        }&genre=${filterGenre.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        // console.log(url);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMovies();
  }, [sort, filterGenre, page, search]);
  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <img src="./Image/logo.png" alt="logo" className="logo" />
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className="body">
          <div className="table-container">
            <Table movies={obj.movies ? obj.movies : []} />
          </div>
          <div className="filter-container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
