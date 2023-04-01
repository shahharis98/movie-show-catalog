import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import ShowDetail from "./components/ShowDetail";
import ShowList from "./components/ShowList";
import { useState } from "react";

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const selectedShowHandler = (id) => {
    const existingShow = shows.find(({ show }) => {
      return show.id === id;
    });
    setSelectedShow(existingShow.show);

    setShowDetail(!showDetail);
  };

  useEffect(() => {
    const fetchData = async function () {
      const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const JsonData = await data.json();

      setShows(JsonData);
    };
    fetchData();
  }, []);

  return (
    <div className="App" style={{ padding: "20px" }}>
      {!showDetail ? (
        <ShowList onShow={selectedShowHandler} shows={shows} />
      ) : (
        <ShowDetail {...selectedShow} />
      )}
    </div>
  );
}

export default App;
