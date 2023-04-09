import React from 'react';
import Card from './components/Card';

function App() {
    return <div>
        <h1 className="headingStyle">Welcome</h1>
        <Card titleText="Item 1" descText="First Item"/>
        <Card titleText="Item 2" descText="Second Item"/>
        <Card titleText="Item 3" descText="Third Item"/>
    </div>
}

export default App;