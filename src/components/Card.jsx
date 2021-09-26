import React from 'react';
import Cardbody from './Cardbody';

const Card = ({ player }) => {
    return (
        <div>

            <div className="container ">
                <div className="row mx-auto">
                {player.map((data) => (
                <Cardbody key={data.id} data={data} />

            ))}

                </div>
            </div>



        </div>
    )
}

export default Card
