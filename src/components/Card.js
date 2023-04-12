import { ImOffice, ImHome3, ImCalendar } from "react-icons/im";
const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();


function Card(props) {
    const { title, description, cellPhone, picture } = props;
    return <div className='card'>
        <img className='cardItemPic' src={picture} alt="" />
        <h3 className='cardTitle'>{title}</h3>
        <p className='cardDescription'>{description}</p>

        <div className="icon_div">
            <ImHome3/>
            <p className="icon_text">{cellPhone[0]}</p>
        </div>

        <div className="icon_div">
            <ImOffice />
            <p className='icon_text'> {cellPhone[1]}</p>
        </div>

        <div className="icon_div">
            <ImCalendar />
            <p className='cardFooter icon_text'>{date + "/" + month + "/" + year}</p>
        </div>
        
    </div>
}

export default Card;
