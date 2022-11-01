import React from "react";
import "./Home.css";
import Git from "./git.png";
import Slack from "./slack.png";

function Home() {
  return (
    <div className="home">
      <div id="link_container">
        <button className="link">
          {" "}
          <a src="" id="">
            Twitter Link
          </a>{" "}
        </button>
        <button className="link">
          {" "}
          <a id="https://training.zuri.team/">Zuri Team</a>{" "}
        </button>
        <button className="link">
          {" "}
          <a src=" http://books.zuri.team" id="">
            Zuri Books
          </a>{" "}
        </button>
        <button className="link">
          {" "}
          <a
            src="https://books.zuri.team/python-for-beginners?ref_id=<ClintonAkpama>"
            id=""
          >
            Python Books
          </a>{" "}
        </button>
        <button className="link">
          {" "}
          <a id="">Background Check for Coders</a>{" "}
        </button>
        <button className="link">
          {" "}
          <a id="">Design Books</a>{" "}
        </button>
      </div>
      <div className="icons">
        <img id="slack" src={Slack} />
        <img id="git" src={Git} />
      </div>
    </div>
  );
}

export default Home;
