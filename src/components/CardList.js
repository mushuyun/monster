import React from "react";
import Card from "./Card";
import ".././styles/cardList.css";


const CardList = props => {
    return (
        <div className="card-list">
             {props.monsters.map(monster=>
                <Card key={monster.id} monster={ monster }></Card>
             )}
        </div>
    )
 }

export default CardList;