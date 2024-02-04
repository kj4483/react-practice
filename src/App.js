import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
// import { useState } from "react";

function App() {
    // const [showing, setShowing] = useState(false);
    // const onClick = () => setShowing((prev) => !prev);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
