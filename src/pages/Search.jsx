import React, { useEffect, useState } from "react";
import GlobalLoading from "../components/GlobalLoading";
import { SearchMedia } from "../api/axiosClient.js";

const Search = () => {
  const [media, setMedia] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handlesumbit = async (event) => {
    event.preventDeafault();
    const Response = await SearchMedia("movie", search);

    setMedia(Response);
  };
  console.log(media);
  return (
    <div>
      <form onSubmit={handlesumbit}>
        <input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Media"
        />
        <button type="submit">Search</button>
      </form>

      <>{media && media.map((item, i) => <h2>{item.title}</h2>)}</>
    </div>
  );
};

export default Search;
