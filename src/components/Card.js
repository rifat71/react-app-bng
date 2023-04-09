// const text1 = "This is our very first demo project. So this is pretty cool.";
const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

function Card(props) {
    const {titleText, descText} = props;
    return <div className='card'>
        <h3 className='cardTitle'>{titleText}</h3>
        <p className='cardDesc'>{descText}</p>
        <p className='cardFooter'>{date + "/" + month + "/" + year}</p>
    </div>
}

export default Card;
