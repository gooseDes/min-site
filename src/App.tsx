import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import logo from "./assets/logo512.webp";
import Icon from "./components/Icon";

async function redirectToLatestReleaseWithKeyword(keyword: string): Promise<void> {
  const apiUrl = `https://api.github.com/repos/gooseDes/min/releases?per_page=100`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
    }

    const releases: Array<{ tag_name: string; html_url: string }> = await response.json();

    const targetKeyword = keyword.toLowerCase();
    const matchingRelease = releases.find(release => release.tag_name.toLowerCase().includes(targetKeyword));

    if (matchingRelease) {
      window.location.href = matchingRelease.html_url;
    } else {
      console.warn(`No releases found.`);
    }
  } catch {
    window.location.href = "https://api.github.com/repos/gooseDes/min/releases";
  }
}

function App() {
  return (
    <div id="app" className="panel">
      <div id="title" className="entering">
        <img src={logo} alt="logo" />
        <h1>Min the Messenger</h1>
      </div>
      <div className="entering">
        <p>
          It has no crazy features, it's just open source and not vibecoded. I made it because I was bored. You can build or
          host it yourself. That's it.
        </p>
        <p className="secondary">Yes, this logo was made in MS Paint</p>
      </div>
      <hr className="entering" />
      <h2 className="entering">Available on</h2>
      <div id="availableOnContainer">
        <h3 className="entering">Android</h3>
        <div className="availableOn entering">
          <button onClick={() => redirectToLatestReleaseWithKeyword("flutter")}>
            <Icon icon={faDownload} />
            <p>Download</p>
          </button>
        </div>
        <hr className="entering" />
        <h3 className="entering">Web and Desktop</h3>
        <div className="availableOn entering">
          <button
            onClick={() => {
              location.href = "https://web.msgmin.com/";
            }}
          >
            <Icon icon={faGlobe} />
            <p>Open Web</p>
          </button>
          <button onClick={() => redirectToLatestReleaseWithKeyword("app")}>
            <Icon icon={faDownload} />
            <p>Download Desktop</p>
          </button>
        </div>
        <hr className="entering" />
        <button
          className="entering"
          onClick={() => {
            location.href = "https://github.com/gooseDes/min/";
          }}
        >
          <Icon icon={faGithub} />
          <p>Source Code</p>
        </button>
      </div>
    </div>
  );
}

export default App;
