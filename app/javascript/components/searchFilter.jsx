import React, { useEffect, useState } from "react";

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  numberOfResults,
  onClickFilterSuggestion,
}) {
  return (
    <>
      <div class="css-tbb4e2 e13d1soq0">
        <div class="css-1b0go4s e13d1soq1">
          <div class="css-12d2mry e3ptovr0">
            <span>Filter profiles</span>
          </div>
        </div>
        <div class="css-1y8qtym e13d1soq2">
          <div class="css-1l2f959 e3ptovr2">
            <input
              class="main-search"
              placeholder="Filter profiles by keyword"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          {searchTerm !== "" && (
            <div
              style={{
                fontSize: 12,
                fontWeight: "bold",
                paddingLeft: 5,
                paddingBottom: 10,
              }}
            >
              Results: {numberOfResults}
            </div>
          )}
          {searchTerm !== "" && (
            <span class="_activeFacet_86jzd_310">
              <span>
                {searchTerm}
                {"   "}
              </span>
              <button
                class="_plain_86jzd_125"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            </span>
          )}
          <div class="css-1l2f959 e3ptovr2">
            <div class="button-row">
              <div
                onClick={() =>
                  onClickFilterSuggestion("Artificial intelligence")
                }
                class="emoji-button row align-center"
              >
                🧠 Artificial intelligence
              </div>
              <div
                onClick={() => onClickFilterSuggestion("San Francisco")}
                class="emoji-button row align-center"
              >
                🌉 San Francisco
              </div>
              <div
                onClick={() => onClickFilterSuggestion("Stanford")}
                class="emoji-button row align-center"
              >
                🌲 Stanford
              </div>
              <div
                onClick={() => onClickFilterSuggestion("Finance")}
                class="emoji-button row align-center"
              >
                💸 Finance
              </div>
              <div
                onClick={() => onClickFilterSuggestion("Fitness")}
                class="emoji-button row align-center"
              >
                🏋️ Fitness
              </div>
              {/* <div class="emoji-button row align-center">🍃 Climate</div>
              <div class="emoji-button row align-center">✏️ Design</div>
              <div class="emoji-button row align-center">⚒️ Devtools</div>
              <div class="emoji-button row align-center">🎓 Education</div>
              <div class="emoji-button row align-center">🛒 Marketplace</div>
              <div class="emoji-button row align-center">🖥️ SaaS</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
