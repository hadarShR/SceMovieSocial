import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchMedia } from "../api/axiosClient.js";

const Search = () => {
  const [media, setMedia] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function handlePageChange(newPage) {
    setPage(newPage);
    handleSearch(null, newPage); // Pass the new page value as a parameter
  }

  async function handleSearch(event, pageNum = 1) {
    if (event) {
      event.preventDefault();
    }

    if (search.trim().length === 0) {
      setMedia([]);
      setPage(1);
      setTotalPages(1);
    } else {
      const Response = await SearchMedia("movie", search, pageNum);
      setMedia(Response.results);
      setTotalPages(Response.total_pages);
    }
  }
  console.log(media);
  console.log(page);
  console.log(search);
  return (
    <StyledSection>
      <div>
        <form onSubmit={handleSearch}>
          <div className="Search-input">
            <input
              autoFocus
              value={search}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Media"
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </div>
        </form>

        {media.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
        <div className="page-button">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button key={pageNum} onClick={() => handlePageChange(pageNum)}>
                {pageNum}
              </button>
            )
          )}
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  .Search-input {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Search-input input {
    border-radius: 10px;
    font-size: 18px;
    height: 40px;
    width: 40%;
    background-color: rgba(204, 204, 204, 0.8);
    border: 2px solid black;
  }
  .Search-input input:focus {
    transition: 0.3s;
    width: 40%;
    color: black;
    background-color: lightgoldenrodyellow;
  }
  .search-button {
    margin-left: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #0077ff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .search-button:hover {
    background-color: #0066cc;
  }

  .page-button {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .page-button button {
    background-color: #ffffff;
    color: #333333;
    border: none;
    padding: 0.5rem;
    margin: 0 0.25rem;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  .page-button button:hover,
  .page-button button:focus {
    background-color: #333333;
    color: #ffffff;
  }
`;

export default Search;
