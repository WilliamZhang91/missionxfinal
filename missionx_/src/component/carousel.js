import React from 'react';
import Carousel from 'react-material-ui-carousel'

// This is the carousel that goes into the offer section of the Home page
function Example(props)
{
    var items = [
        {
            name:  <img style={{width: "100%"}} src="Mission X Images\Home Page\Projects 01.png" className="twoimg"/>,
            key: "1",
            
        },
        {
            name: <img style={{width: "100%"}} src="Mission X Images\Home Page\Projects 02.png" className="twoimg"/>,
            
        },
        {
            name: <img style={{width: "100%"}} src="Mission X Images\Home Page\Projects 03.png" className="twoimg"/>,
            
        },
        {
            name: <img style={{width: "100%"}} src="Mission X Images\Home Page\Projects 04.png" className="twoimg"/>,
            
        }
    ]

    return (
        <Carousel
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        
            <div>{props.item.name}</div>
           
       
    )
}

export default Example;