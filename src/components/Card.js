const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();


function Card(props) {
    const { title, description, cellPhone } = props;
    return <div className='card'>
        <h3 className='cardTitle'>{title}</h3>
        <p className='cardDescription'>{description}</p>
        <p className='cardDescription'>Home: {cellPhone[0]}</p>
        <p className='cardDescription'>Office: {cellPhone[1]}</p>
        <p className='cardFooter'>{date + "/" + month + "/" + year}</p>
    </div>
}

export default Card;
