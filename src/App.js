import React from 'react';
import Card from './components/Card';
import CardData from './cardItem.json'

function App() {

    // using for loop to add data
    // let items = [];
    // for(let i=0; i<CardData.length;i++){
    //     items.push(<Card title={CardData[i].title} description={CardData[i].description}/>);
    // }

    return <div> 
        <h1 className="headerStyle">Welcome</h1>
        {CardData.map((item, index) => <Card key={index} title={item.title} description={item.description} />)}
    </div>
}

export default App;