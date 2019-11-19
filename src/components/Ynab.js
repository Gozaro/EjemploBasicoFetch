
import React from 'react';
import NewItem from './NewItem';


const Ynab = ({news}) => {


    return ( 


        <div className="Ynab">

        {news.map(newitem => (
            <NewItem 
                key ={newitem.url}
                newitem ={newitem}
            />
        ))}

           
        </div>
        
    );
}

export default Ynab;