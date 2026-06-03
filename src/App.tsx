import "./App.css";

function App() {
    return (
        <div id="app" className="panel">
            <h1 className="entering">Min</h1>
            <h2 className="entering">Available on</h2>
            <h3 className="entering">Android</h3>
            <div style={{ gap: 10, display: "flex", justifyContent: "center" }}>
                <button
                    className="entering"
                    onClick={() => {
                        location.href = "https://github.com/gooseDes/min-mobile/";
                    }}
                >
                    Github
                </button>
                <button
                    className="entering"
                    onClick={() => {
                        location.href = "https://github.com/gooseDes/min-mobile/releases/latest";
                    }}
                >
                    Download
                </button>
            </div>
            <h3 className="entering">Web</h3>
            <div style={{ gap: 10, display: "flex", justifyContent: "center" }}>
                <button
                    className="entering"
                    onClick={() => {
                        location.href = "https://github.com/gooseDes/min-frontend/";
                    }}
                >
                    Github
                </button>
                <button
                    className="entering"
                    onClick={() => {
                        location.href = "https://web.msg-min.xyz/";
                    }}
                >
                    Open
                </button>
            </div>
        </div>
    );
}

export default App;
