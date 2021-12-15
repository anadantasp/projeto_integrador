import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
import sustentavel from '../../../public/assets/sustentavel.jpg';

function CarouselComponent() {
    const [items, setstate] = useState([
        { id: 1, title: 'item #1', img: "https://i.imgur.com/61RmNfi.png" },
        { id: 2, title: 'item #2', img: "https://i.imgur.com/TPlA8LO.jpg" },
        { id: 3, title: 'item #2', img: "https://i.imgur.com/wkeYq0a.jpg" }

    ])
    return (
        <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={1500}>
            {items.map(item => <div key={item.id}>
                <img src={item.img} alt="carrosel de imagens" width="100%" height="100%" />
            </div>)}
        </Carousel>
    )
}

export default CarouselComponent;