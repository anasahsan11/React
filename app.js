// const heading=React.createElement(
//             "h1",{id:"heading"},"Hello World From React, I am Anas"
// );

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"children"},
        [React.createElement("h1",{id:"heading"},"I am an H! Tag"),
        React.createElement("h2",{id:"heading"},"I am an H! Tag")]
        
    )
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);