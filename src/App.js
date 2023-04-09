import React from 'react';
import Card from './components/Card';
import CardData from './cardItem.json';
import { v4 as uuidv4 } from 'uuid';  // to generate unique id

function App() {

    // using for loop to add data
    // let items = [];
    // for(let i=0; i<CardData.length;i++){
    //     items.push(<Card title={CardData[i].title} description={CardData[i].description}/>);
    // }

    return <div>
        <h1 className="headerStyle">Welcome</h1>
        {CardData.map((item) =>
            <Card key={uuidv4()}
                title={item.title}
                description={item.description}
                cellPhone={
                    item.phones.map((phone, index) =>
                        <div key={index}>
                            {phone.home}
                            {phone.office}
                        </div>
                    )
                }
            />)
        }
    </div>
}

export default App;