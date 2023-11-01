import React from "react"
import ReactDOM from "react-dom/client";

const HeadingComponent = () => (<h1 className="head">Hey !! This is JSX</h1>);
const SubHeading = () => (
    <div id = "container">
        <HeadingComponent/>
        <h1 className="sub">This is subHeading</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SubHeading/>);