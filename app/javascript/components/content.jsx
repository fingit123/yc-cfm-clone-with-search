import React from "react";
import SearchFilter from "./searchFilter";

export default function Content({
  displayedUser,
  setDisplayedUser,
  searchTerm,
  setSearchTerm,
  onClickNext,
  numberOfResults,
}) {
  const myInterests = [
    "Consumer",
    "Education / Edtech",
    "Entertainment",
    "Food / Beverage",
    "E-Commerce",
  ];

  return (
    <div class="css-kg8wej e1ha82nc1">
      <div class="css-m9g13j e1ha82nc5">
        <div class="css-10cl0k7">
          <button class="css-ypwl68 ezadhj70">
            <svg
              class="CofounderMatchingCandidate-MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
            <div>Back</div>
          </button>
          <div class="css-1mgo38q efk6n0y1">
            <div class="css-1nl6uef e1n46zp30">
              <div class="css-6z0kka e1n46zp31">Save to favorites</div>
              <svg
                class="CofounderMatchingCandidate-MuiSvgIcon-root CofounderMatchingCandidate-MuiSvgIcon-fontSizeLarge"
                focusable="false"
                viewBox="0 0 24 24"
                color="#fbbd08"
                aria-hidden="true"
              >
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="css-139x40p">
          <div class="css-ylm4ro">
            <img
              src={displayedUser?.profilepic}
              height="150"
              width="150"
              alt="candidate avatar"
              class="css-1bm26bw"
            />
            <div class="css-4vtf95">
              <div class="css-1jzdv8h">
                <h1 class="css-1s8r69b">{displayedUser?.name}</h1>
                <div class="css-1a4tupa">
                  <button class="css-xf9j1d e10og2in4">
                    <svg
                      class="CofounderMatchingCandidate-MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p class="css-ruq4fr e10og2in0">
                <div title="Location" class="css-1dnaxzp e10og2in1">
                  <svg
                    class="CofounderMatchingCandidate-MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"></path>
                  </svg>
                  {/* New York, NY, USA */}
                  {displayedUser?.location}
                </div>
                <div title="Age" class="css-1dnaxzp e10og2in1">
                  <svg
                    class="CofounderMatchingCandidate-MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z"></path>
                  </svg>
                  {/* 22 */}
                  {displayedUser?.age}
                </div>
                <div
                  title="Last seen on co-founder matching"
                  class="css-1dnaxzp e10og2in1"
                >
                  <svg
                    class="CofounderMatchingCandidate-MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                  </svg>
                  {/* Last seen 18 days ago */}
                  {displayedUser?.lastseen}
                </div>
              </p>
              <p class="css-1akxo02 e10og2in0"></p>
            </div>
          </div>
          <div class="css-i3xmev"></div>
          <div class="css-fu3au1">
            <div class="css-1m1qrud emdr5n1">
              <div class="css-cyoc3t">
                <p class="css-r7q7qr">
                  I'm{" "}
                  <b>
                    {displayedUser?.technical === "yes"
                      ? "technical"
                      : "not technical"}
                  </b>{" "}
                  and <span>{displayedUser?.hasideas}</span>
                  {/* <span>
                    <b>have some ideas</b>, but I'm also open to exploring other
                    ideas
                  </span> */}
                  .
                </p>
                {/* <p class="css-r7q7qr">
                  I'm <b>technical</b>, <b>passively looking</b>, and{" "}
                  <span>
                    <b>have some ideas</b>, but I'm also open to exploring other
                    ideas
                  </span>
                  .
                </p> */}
                <p>
                  I'm willing to do <b>{displayedUser?.willingtodo}</b>.
                  {/* <b>Engineering</b>,{" "}
                  <b>Sales and marketing</b>, <b>Product</b>, and{" "}
                  <b>Operations</b>. */}
                </p>
              </div>
            </div>
          </div>
          <div class="css-fu3au1">
            <div class="css-1us8k2f emdr5n0">
              <h3 class="css-i3jcei">
                {" "}
                <span>About Me</span>
              </h3>
            </div>
            <div class="css-1m1qrud emdr5n1">
              <table class="css-1ezh3kn">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <span class="css-19yrmx8">Intro</span>
                      <div class="css-1tp1ukf">{displayedUser?.intro}</div>
                    </td>
                  </tr>
                  {/* <tr>
                    <td colspan="2">
                      <div
                        class="css-19yrmx8"
                        style={{
                          paddingTop: 20,
                          marginBottom: 0,
                        }}
                      >
                        Life Story
                      </div>
                      <div class="css-1tp1ukf">
                        Athletics have been a driving force since the end of
                        high school. Like in school, success is simple: hard
                        work and consistency lead to success. Teamwork is also a
                        key component - my greatest failures in sport and school
                        have taught me the importance of both assisting and
                        leaning on others. These journeys have also taught me
                        that I need a sense of greater purpose to be "happy". I
                        want to create a business that will have a tangible
                        positive impact on the lives of those around me.
                      </div>
                    </td>
                  </tr> */}
                  <tr>
                    <td colspan="2">
                      <div
                        class="css-19yrmx8"
                        style={{
                          paddingTop: 20,
                          marginBottom: 0,
                        }}
                      >
                        Free Time
                      </div>
                      <div class="css-1tp1ukf">{displayedUser?.free}</div>
                    </td>
                  </tr>
                  {/* <tr>
                    <td colspan="2">
                      <div
                        class="css-19yrmx8"
                        style={{
                          paddingTop: 20,
                          marginBottom: 0,
                        }}
                      >
                        Other
                      </div>
                      <div class="css-1tp1ukf">
                        I'm an extroverted introvert: I function perfectly fine
                        alone but I enjoy the company of others. I like to ask
                        questions and argue. Dialectic can help get closer to
                        truth, even if it doesn't truly exist. I don't know
                        exactly what I want to do, but when I find the right
                        path, I will be all in. When I'm passionate about
                        something, I dive in to the point of fault.
                      </div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div class="css-fu3au1">
            <div class="css-1us8k2f emdr5n0">
              <h3 class="css-i3jcei">
                {" "}
                <span>My Background</span>
              </h3>
            </div>
            <div class="css-1m1qrud emdr5n1">
              <table class="css-1ezh3kn">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <span class="css-19yrmx8">Impressive accomplishment</span>
                      <div class="css-1tp1ukf">
                        {displayedUser?.accomplishment}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div
                        class="css-19yrmx8"
                        style={{
                          paddingTop: 20,
                          marginBottom: 0,
                        }}
                      >
                        Education
                      </div>
                      <div class="css-1tp1ukf">
                        <ul>
                          <li>
                            <div class="css-kaq1dv">
                              {displayedUser?.education}
                            </div>
                          </li>
                          {/* <li>
                            <div class="css-kaq1dv">
                              University of Cambridge, Mathematics (MASt),
                              Projected 2025
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div
                        class="css-19yrmx8"
                        style={{
                          paddingTop: 20,
                          marginBottom: 0,
                        }}
                      >
                        Employment
                      </div>
                      <div class="css-1tp1ukf">
                        <ul>
                          <li>
                            <div class="css-kaq1dv">
                              {displayedUser?.employment}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="css-fu3au1">
            <div class="css-1us8k2f emdr5n0">
              <h3 class="css-i3jcei">
                {" "}
                <span>Potential ideas</span>
              </h3>
            </div>
            <div class="css-1m1qrud emdr5n1">
              <table class="css-1ezh3kn">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="css-1hla380">{displayedUser?.ideas}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="css-fu3au1">
            <div class="css-1us8k2f emdr5n0">
              <h3 class="css-i3jcei">
                {" "}
                <span>What I'm looking for in a co-founder</span>
              </h3>
            </div>
            <div class="css-1m1qrud emdr5n1">
              <table class="css-1ezh3kn">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="css-1hla380">
                        {displayedUser?.lookingfor}
                        {/* <p>
                          Ideally, my co-founder is{" "}
                          <span>
                            <b>technical</b>
                          </span>
                          <span> and </span>
                          <span>
                            <b>aligned</b> with my interests
                          </span>
                          .
                        </p> */}
                      </div>
                    </td>
                  </tr>
                  {/* <tr>
                    <td colspan="2">
                      <span class="css-19yrmx8">Ideal co-founder</span>
                      <div class="css-1tp1ukf">
                        Someone who likes to ideate, but knows when to take
                        action. They should be intellectually curious and
                        willing to re-evaluate opinions. I want to make work fun
                        - even though it will be challenging - and I hope they
                        can too. Exceptional technical skills would be a big
                        plus: I can code, but I don't have true software
                        engineering experience. I want to get my hands dirty but
                        likely cannot lead product development.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <span class="css-19yrmx8">Equity expectations</span>
                      <div class="css-1tp1ukf">
                        Equal split is good with me!
                      </div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div class="css-fu3au1">
            <div class="css-1m1qrud emdr5n1">
              <table class="css-1ezh3kn">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <span class="css-19yrmx8">Our shared interests</span>
                      <div class="css-1tp1ukf">
                        <span class="css-11urj75">
                          {/* <div class="css-1v9f1hn ejh47h00">Consumer</div>
                          <div class="css-1v9f1hn ejh47h00">
                            Education / Edtech
                          </div>
                          <div class="css-1v9f1hn ejh47h00">Entertainment</div>
                          <div class="css-1v9f1hn ejh47h00">
                            Food / Beverage
                          </div>
                          <div class="css-1v9f1hn ejh47h00">E-Commerce</div> */}
                          {myInterests
                            .filter((element) =>
                              displayedUser?.interests
                                .split(", ")
                                .includes(element)
                            )
                            .map((interest) => (
                              <div class="css-1v9f1hn ejh47h00">{interest}</div>
                            ))}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <span class="css-19yrmx8">My interests</span>
                      <div class="css-1tp1ukf">
                        <span class="css-11urj75">
                          {/* <div class="css-1lw35t7 ejh47h00">
                            Biomedical / Biotech
                          </div>
                          <div class="css-1lw35t7 ejh47h00">Healthcare</div>
                          <div class="css-1lw35t7 ejh47h00">
                            Travel / Tourism
                          </div>
                          <div class="css-1lw35t7 ejh47h00">
                            Real Estate / Proptech
                          </div>
                          <div class="css-1lw35t7 ejh47h00">
                            B2B / Enterprise
                          </div> */}
                          {displayedUser?.interests
                            .split(", ")
                            .map((interest) => (
                              <div class="css-1lw35t7 ejh47h00">{interest}</div>
                            ))}
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="css-1bnvc2f">
            <div
              // title="https://www.linkedin.com/in/gil-dexter-47147b174/"
              class="css-107cmgv ekomr440"
            >
              <a>View on LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div class="css-18uz8v e1xhg8ss0">
        <div class="css-nzfpbh efk6n0y0">
          <div class="css-nzfpbh efk6n0y0">
            <div class="css-1xbzuoj e1qryfvo2">
              <div class="css-1nl6uef e1n46zp30">
                <div class="css-6z0kka e1n46zp31">Save to favorites</div>
                <svg
                  class="CofounderMatchingCandidate-MuiSvgIcon-root CofounderMatchingCandidate-MuiSvgIcon-fontSizeLarge"
                  focusable="false"
                  viewBox="0 0 24 24"
                  color="#fbbd08"
                  aria-hidden="true"
                >
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                </svg>
              </div>
            </div>
            <div class="css-6fzln5">
              <div class="css-1m1qrud emdr5n1">
                <h2>Invite to connect</h2>
                <textarea
                  placeholder='If you&apos;re excited about potentially working with this co-founder, type a short message here and click "Invite."'
                  class="css-1z3uvv"
                  // style="height: 208px !important;"
                ></textarea>
                <div class="css-1qhci44 e1qryfvo3">
                  <div class="css-2imjyh">
                    <button color="green" class="css-b848ts e1qryfvo0">
                      Invite to connect
                    </button>
                  </div>
                </div>
                <div class="css-1t0990z">
                  <p>
                    (You have <b>20</b> invites left for this week.)
                  </p>{" "}
                </div>
              </div>
            </div>
            <div class="css-1t0990z">
              <button
                color="gray"
                class="css-eaxdrh e1qryfvo1"
                onClick={onClickNext}
              >
                Skip for now
              </button>
            </div>
          </div>
          <div class="css-1mgo38q efk6n0y1">
            <div></div>
            <div class="css-12zvoux e10fds1b0">
              <button color="gray" class="css-eaxdrh e1qryfvo1">
                Skip for now
              </button>
              <button color="green" class="css-b848ts e1qryfvo0">
                Send invitation
              </button>
            </div>
          </div>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          numberOfResults={numberOfResults}
        />

        {/* Warning section */}
        <div class="css-3ihjoy">
          <p>
            Please do not contact anyone outside the Startup School platform
            without their consent.
          </p>
          <div>
            <a class="css-1p3qk0r e1tgjl5x0">Report this profile</a> if you
            believe they are selling services, hiring, or doing anything other
            than actively seeking a co-founder.
          </div>
        </div>

        <div class="css-1mgo38q efk6n0y1">
          <div class="css-nzfpbh efk6n0y0">
            <div class="css-1xbzuoj e1qryfvo2">
              <div class="css-1nl6uef e1n46zp30">
                <div class="css-6z0kka e1n46zp31">Save to favorites</div>
                <svg
                  class="CofounderMatchingCandidate-MuiSvgIcon-root CofounderMatchingCandidate-MuiSvgIcon-fontSizeLarge"
                  focusable="false"
                  viewBox="0 0 24 24"
                  color="#fbbd08"
                  aria-hidden="true"
                >
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                </svg>
              </div>
            </div>
            <div class="css-6fzln5">
              <div class="css-1m1qrud emdr5n1">
                <h2>Invite to connect</h2>
                <textarea
                  placeholder='If you&apos;re excited about potentially working with this co-founder, type a short message here and click "Invite."'
                  class="css-1z3uvv"
                  // style="height: 114px !important;"
                ></textarea>
                <div class="css-1qhci44 e1qryfvo3">
                  <div class="css-2imjyh">
                    <button color="green" class="css-b848ts e1qryfvo0">
                      Invite to connect
                    </button>
                  </div>
                </div>
                <div class="css-1t0990z">
                  <p>
                    (You have <b>20</b> invites left for this week.)
                  </p>{" "}
                </div>
              </div>
            </div>
            <div class="css-1t0990z">
              <button color="gray" class="css-eaxdrh e1qryfvo1">
                Skip for now
              </button>
            </div>
          </div>
          <div class="css-1mgo38q efk6n0y1">
            <div></div>
            <div class="css-12zvoux e10fds1b0">
              <button color="gray" class="css-eaxdrh e1qryfvo1">
                Skip for now
              </button>
              <button color="green" class="css-b848ts e1qryfvo0">
                Send invitation
              </button>
            </div>
          </div>
        </div>
        <div class="css-wrs2b3"></div>
      </div>
    </div>
  );
}
