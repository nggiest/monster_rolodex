import { Component } from "react";

import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((monsters) => {
                    const {name, email, id} = monsters;
                    return <Card monster={monsters}/>
                    })}
            </div>
        )
    }
}

export default CardList;