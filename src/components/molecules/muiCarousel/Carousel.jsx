import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'

function Example()
{
    return (
        <Carousel>
            {
                items.map( item => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

j