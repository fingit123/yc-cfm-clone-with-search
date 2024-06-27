import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./profiles_list.css";
import Menu from "./menu";
import Content from "./content";

function ProfilesList() {
  const [loading, setLoading] = useState(true);
  const [loadedProfiles, setLoadedProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedUser, setDisplayedUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    const apiEndpoint = `/api/profiles?search_term=${searchTerm}`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setLoadedProfiles(data.profiles);
        setLoading(false);
      });
  }, [searchTerm]);

  // useEffect(() => {
  //   console.log("search term changed", searchTerm);
  // }, [searchTerm]);
  useEffect(() => {
    if (loadedProfiles?.length > 0) {
      setDisplayedUser(loadedProfiles[0]);
    }
  }, [loadedProfiles]);
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       <>
  //         {loadedProfiles.map((profile, index) => {
  //           <div>{profile.name}</div>;
  //         })}
  //       </>
  //     );
  //   }

  return (
    // <div>
    //   {loading ? (
    //     "loading"
    //   ) : (
    //     <>
    //       {loadedProfiles.length > 0 && (
    //         <p
    //           style={{
    //             color: "red",

    //             backgroundColor: "#bb6c69",
    //             // backgroundColor:
    //             //     ? "#3777f0"
    //             //     : "lightgrey",
    //             padding: 5,
    //             borderRadius: 5,
    //           }}
    //         >
    //           Loaded
    //           {loadedProfiles[0].name}
    //         </p>
    //       )}
    //     </>
    //   )}
    // </div>

    <div class="navigation-parent">
      <Menu />
      <div class="page-content">
        <div class="top-container">
          <div>
            <div class="css-8hkyk1">
              <Content
                displayedUser={displayedUser}
                setDisplayedUser={setDisplayedUser}
                setSearchTerm={setSearchTerm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const profilesList = ReactDOM.createRoot(
  document.getElementById("profiles-list-container")
);
profilesList.render(<ProfilesList />);
