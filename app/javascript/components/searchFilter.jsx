import React, { useEffect, useState } from "react";

export default function SearchFilter({ setSearchTerm }) {
  return (
    <>
      {/* new search filter */}
      <div class="css-tbb4e2 e13d1soq0">
        <div class="css-1b0go4s e13d1soq1">
          <div class="css-12d2mry e3ptovr0">
            <span>Filter profiles</span>
            {/* <div class="css-w64z5m e3ptovr1">
              <a
                class="CofounderMatchingCandidate-MuiButtonBase-root CofounderMatchingCandidate-MuiButton-root CofounderMatchingCandidate-jss2 CofounderMatchingCandidate-jss1 CofounderMatchingCandidate-MuiButton-contained CofounderMatchingCandidate-MuiButton-disableElevation"
                tabindex="0"
                aria-disabled="false"
                href="/cofounder-matching/profile?page=3"
              >
                <span class="CofounderMatchingCandidate-MuiButton-label">
                  Edit
                </span>
              </a>
            </div> */}
          </div>
        </div>
        <div class="css-1y8qtym e13d1soq2">
          <div class="css-1l2f959 e3ptovr2">
            <input
              class="main-search"
              placeholder="Filter profiles by keyword"
              //   value=""
              onChange={(event) => {
                setSearchTerm(event.target.value);
                // console.log("searchy", event.target.value);
              }}
            />
            {/* <span>
              Ideally, my co-founder is{" "}
              <span>
                <b>not set</b> on a specific idea
              </span>
              ,{" "}
              <span>
                <b>technical</b>
              </span>
              , and{" "}
              <span>
                in my region (<b>North America</b>)
              </span>
              .
            </span> */}
          </div>
          <div class="css-1l2f959 e3ptovr2">
            {/* <span>
              I want a co-founder willing to be responsible for{" "}
              <b>Engineering</b>.
            </span> */}
            <div class="button-row">
              <div class="emoji-button row align-center">🧠 AI</div>
              <div class="emoji-button row align-center">📊 B2B</div>
              <div class="emoji-button row align-center">🍃 Climate</div>
              <div class="emoji-button row align-center">💸 Cryptocurrency</div>
              <div class="emoji-button row align-center">✏️ Design</div>
              <div class="emoji-button row align-center">⚒️ Devtools</div>
              <div class="emoji-button row align-center">🎓 Education</div>
              <div class="emoji-button row align-center">🏦 Fintech</div>
              <div class="emoji-button row align-center">🛒 Marketplace</div>
              <div class="emoji-button row align-center">🖥️ SaaS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Og filters section */}
      {/* <div class="css-tbb4e2 e13d1soq0">
          <div class="css-1b0go4s e13d1soq1">
            <div class="css-12d2mry e3ptovr0">
              <span>Your filters</span>
              <div class="css-w64z5m e3ptovr1">
                <a
                  class="CofounderMatchingCandidate-MuiButtonBase-root CofounderMatchingCandidate-MuiButton-root CofounderMatchingCandidate-jss2 CofounderMatchingCandidate-jss1 CofounderMatchingCandidate-MuiButton-contained CofounderMatchingCandidate-MuiButton-disableElevation"
                  tabindex="0"
                  aria-disabled="false"
                  href="/cofounder-matching/profile?page=3"
                >
                  <span class="CofounderMatchingCandidate-MuiButton-label">
                    Edit
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="css-1y8qtym e13d1soq2">
            <div class="css-1l2f959 e3ptovr2">
              <span>
                Ideally, my co-founder is{" "}
                <span>
                  <b>not set</b> on a specific idea
                </span>
                ,{" "}
                <span>
                  <b>technical</b>
                </span>
                , and{" "}
                <span>
                  in my region (<b>North America</b>)
                </span>
                .
              </span>
            </div>
            <div class="css-1l2f959 e3ptovr2">
              <span>
                I want a co-founder willing to be responsible for{" "}
                <b>Engineering</b>.
              </span>
            </div>
          </div>
        </div> */}
    </>
  );
}
