import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
  return <div>Hello world!!</div>;
}

export default App;
