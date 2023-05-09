import React, { useState } from "react";
import Card from "./Card";

function Home() {
  const movies = [
    {
      url: "https://www.mercurynews.com/wp-content/uploads/2016/09/20160513_074630_leonardo_dicaprio_24734_13519.jpg?w=640",
      id: 1,
      name: "Leonardo Dicabrio",
    },
    {
      url: "https://content.api.news/v3/images/bin/b098ced64bf2b03c7390dd1e726e8171?width=1024",
      id: 2,
      name: "Brad Pite",
    },
    {
      url: "https://www.mrdustbin.com/en/wp-content/uploads/2021/05/johnny-depp.jpg",
      id: 3,
      name: "John Depp",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-109478107-1514328996.jpg",
      id: 4,
      name: "Maria",
    },
    {
      url: "https://hairstylecamp.com/wp-content/uploads/Actor-Keanu-Reeves-with-Long-Hair.jpg.webp",
      id: 5,
      name: "John Wick",
    },
    {
      url: "https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/491198872/Hugh-Jackman-weight-loss-tip.jpg?quality=82&strip=1",
      id: 6,
      name: "avenger",
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filterName,setFilterName] = useState(null)

  const filteredData = movies.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const handleSearch = () => {
    const filterName = movies.filter(
      (item) => item.name.toLowerCase() === searchName.toLowerCase()
    );
    setFilterName(filterName);
   
  };


  return (
    <>
      <div className="inputs">
        {/* letter  */}
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="search for letter"
          type="text"
        />

        {/* world */}
        <input
          value={searchName}
          placeholder="search for name"
          onChange={(e) => setSearchName(e.target.value)}
          type="text"
        />
        <button onClick={handleSearch}>Search</button>
        {/* world */}
      </div>
      <div className="card-list">
        {filterName?.map((item, index) => {
          return (
            <Card url={item.url} key={index} id={item.id} name={item.name} />
          );
        })}
        {searchValue && filteredData.map((item, index) => {
          return (
            <Card url={item.url} key={index} id={item.id} name={item.name} />
          );
        })}
        {!searchValue && !filterName&&
          movies.map((item, index) => {
            return (
              <Card url={item.url} key={index} id={item.id} name={item.name} />
            );
          })}
      </div>
    </>
  );
}

export default Home;
