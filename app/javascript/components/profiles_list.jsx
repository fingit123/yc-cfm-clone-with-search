import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function ProfilesList() {
  const [loading, setLoading] = useState(true);
  const [loadedProfiles, setLoadedProfiles] = useState([]);

  useEffect(() => {
    const apiEndpoint = "/api/profiles";
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setLoadedProfiles(data.profiles);
        setLoading(false);
      });
  }, []);

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
    <div>
      {loading ? (
        "loading"
      ) : (
        <>
          {loadedProfiles.length > 0 && (
            <div>
              {/* {loadedProfiles.map((profile, index) => {
                <div>{index}</div>;
                // <div>{profile.name}</div>;
              })} */}
              Loaded
              {loadedProfiles[0].name}
            </div>
          )}
        </>
      )}
    </div>
  );
}

const profilesList = ReactDOM.createRoot(
  document.getElementById("profiles-list-container")
);
profilesList.render(<ProfilesList />);
