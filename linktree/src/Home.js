import React from "react";
import "./Home.css";
import Git from "./git.png";
import Slack from "./slack.png";

function Home() {
  return (
    <div className="home">
      <div id="link_container">
        <a className="link" href="twitter.com/clintonwontmiss" id="twitter">
          Twitter Link
        </a>
        <a className="link" id="btn__zuri" href="https://training.zuri.team/">
          Zuri Team
        </a>
        <a
          className="link"
          href=" http://books.zuri.team"
          id="book__design"
          title="Coding and design books"
          subtext="This is where you find books about coding and design"
        >
          Zuri Books
        </a>
        <a
          className="link"
          href="https://books.zuri.team/python-for-beginners?ref_id=<ClintonAkpama>"
          id="book__python"
          title="Great book sure to propel your python programming career to the next level!"
        >
          Python Books
        </a>
        <a
          className="link"
          href="https://background.zuri.team"
          id="pitch"
          title="We run background checks on coders so you do not have to go through the hassle of running them yourself! Click to find out more"
        >
          Background Check for Coders
        </a>
        <a
          className="link"
          href="https://books.zuri.team/design-rules"
          id="book__design"
          title="Zuri offers a free design book to help you master the trade that is design. Encapture minds with visuals, only a click away. Why not? Its free!"
        >
          Design Books
        </a>
      </div>
      <div className="icons">
        <img id="slacklogo" src={Slack} alt="slack" />
        <img id="git" src={Git} alt="gitlogo" />
      </div>
    </div>
  );
}

export default Home;
