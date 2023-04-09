import React from 'react';
import Card from './components/Card';
import CardItem from './cardItem.json'

function App() {

    return <div>
        <h1 className="headerStyle">Welcome</h1>
        <Card title={CardItem[0].title} description={CardItem[0].description}/>
        <Card title={CardItem[1].title} description={CardItem[1].description}/>
        <Card title={CardItem[2].title} description={CardItem[2].description}/>
    </div>
}

export default App;