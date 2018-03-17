import React from 'react';
import NewsItem from './news_list_item'


const newsList = (props) => {
    
    //function to loop through the item using map
    const items = props.news.map((item) => {
        return (
            <NewsItem key={item.id} item = {item}/>
        )
    })

    return(
        <div>
            {items}
        </div>
    )
}

export default newsList;