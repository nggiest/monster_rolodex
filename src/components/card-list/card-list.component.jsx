import './card-list.styles.css';
import Card from "../card/card.component";

const CardList = ({monsters}) => {
    return (
        <div className="card-list">
            {monsters.map((monsters) => {
                return <Card monster={monsters}/>
            })}
        </div>
    )
}

export default CardList;