import React from 'react';


const NewItem = ({newitem}) => {

    //get data
    const {title, publishedAt, url} = newitem;
  

    // conditional if there is not image

    return ( 
        <div className="ynab">
            <span className="card-text"><small className="text-muted">{publishedAt}</small></span>
            <h5 className="card-title"><a href={url} target="_blank" rel="noopener noreferrer" className="link-new">{title}</a></h5>
        </div>
    );
}

export default NewItem;