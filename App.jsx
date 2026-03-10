import './App.css';

const MyColors = [
    { number: 1, bgcolor: "#ffd6d6" },
    { number: 2, bgcolor: "#d6f0ff" },
    { number: 3, bgcolor: "#e8ffd6" },
    { number: 4, bgcolor: "#fff4d6" },
    { number: 5, bgcolor: "#f0d6ff" },
    { number: 6, bgcolor: "#d6fff4" },
    { number: 7, bgcolor: "#ffd6f0" },
    { number: 8, bgcolor: "#d6e8ff" },
    { number: 9, bgcolor: "#fffbd6" }
];

function Block({ bgcolor, children }) {
    const handleClick = () => {
        alert(children);
    };

    return (
        <div 
            className="block" 
            style={{ backgroundColor: bgcolor }}
            onClick={handleClick}
        >
            {children}
        </div>
    );
}

function ColorGrid({ colorArray }) {
    return (
        <div className="grid">
            {colorArray.map((item, index) => (
                <Block key={index} bgcolor={item.bgcolor}>
                    {item.number}
                </Block>
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="app">
            <h1>Color Grid</h1>
            <ColorGrid colorArray={MyColors} />
        </div>
    );
}

export default App;
