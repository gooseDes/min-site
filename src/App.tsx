import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import logo from "./assets/logo512.webp";
import Icon from "./components/Icon";

function App() {
    return (
        <div id="app" className="panel">
            <div id="title" className="entering">
                <img src={logo} alt="logo" />
                <h1>Min the Messenger</h1>
            </div>
            <div className="entering">
                <p>
                    It has no crazy features, it's just open source and not vibecoded. I made it because I was bored. You can
                    build or host it yourself. That's it.
                </p>
                <p className="secondary">Yes, this logo was made in MS Paint</p>
            </div>
            <hr className="entering" />
            <h2 className="entering">Available on</h2>
            <div id="availableOnContainer">
                <h3 className="entering">Android</h3>
                <div className="availableOn entering">
                    <button
                        onClick={() => {
                            location.href = "https://github.com/gooseDes/min-mobile/";
                        }}
                    >
                        <Icon icon={faGithub} />
                        <p>Source Code</p>
                    </button>
                    <button
                        onClick={() => {
                            location.href = "https://github.com/gooseDes/min-mobile/releases/latest";
                        }}
                    >
                        <Icon icon={faDownload} />
                        <p>Download</p>
                    </button>
                </div>
                <hr className="entering" />
                <h3 className="entering">Web and Desktop</h3>
                <div className="availableOn entering">
                    <button
                        onClick={() => {
                            location.href = "https://github.com/gooseDes/min-web/";
                        }}
                    >
                        <Icon icon={faGithub} />
                        <p>Source Code</p>
                    </button>
                    <button
                        onClick={() => {
                            location.href = "https://web.msgmin.com/";
                        }}
                    >
                        <Icon icon={faGlobe} />
                        <p>Open Web</p>
                    </button>
                    <button
                        onClick={() => {
                            location.href = "https://github.com/gooseDes/min-web/releases/latest";
                        }}
                    >
                        <Icon icon={faGlobe} />
                        <p>Download Desktop</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
