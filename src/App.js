import React from 'react';
import Card from './components/Card';

function App() {
    return <div>
        <h1 className="headerStyle">Welcome</h1>
        <Card title="Item 1" description="First Item"/>
        <Card title="Item 2" description="Second Item"/>
        <Card title="Item 3" description="Third Item"/>
    </div>
}

export default App;