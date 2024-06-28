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
  const [numberOfResults, setNumberOfResults] = useState(null);

  useEffect(() => {
    setLoading(true);
    const apiEndpoint = `/api/profiles?search_term=${searchTerm}`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setLoadedProfiles(
          data.profiles.map((profile, index) => ({ index, ...profile }))
        );
        // setLoadedProfiles(data.profiles);
        setNumberOfResults(data?.profiles?.length);
        setLoading(false);
      });
  }, [searchTerm]);

  useEffect(() => {
    if (loadedProfiles?.length > 0) {
      setDisplayedUser(loadedProfiles[0]);
    }
  }, [loadedProfiles]);

  const onClickNext = () => {
    if (displayedUser.index < loadedProfiles.length - 1) {
      setDisplayedUser(loadedProfiles[displayedUser.index + 1]);
    }
  };

  const onClickBack = () => {
    if (displayedUser.index > 0) {
      setDisplayedUser(loadedProfiles[displayedUser.index - 1]);
    }
  };

  const onClickFilterSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
  };

  return (
    <div class="navigation-parent">
      <Menu />
      <div class="page-content">
        <div class="top-container">
          <div>
            <div class="css-8hkyk1">
              <Content
                displayedUser={displayedUser}
                setDisplayedUser={setDisplayedUser}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onClickNext={onClickNext}
                numberOfResults={numberOfResults}
                onClickBack={onClickBack}
                onClickFilterSuggestion={onClickFilterSuggestion}
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
