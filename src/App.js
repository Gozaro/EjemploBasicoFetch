import React, { Component } from 'react';
import Ynab from './components/Ynab'

class  App extends Component {

  state = { 
    news: [],

  }

componentDidMount() {

  this.callNews();

}



callNews = async () => {
  const url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=97d2f4f82eee439380a026344842b459`;

  const response = await fetch(url);
  const news = await response.json();
  
  this.setState({
    news : news.articles
  })
}




  render() { 

  
    return ( 
      
      <div className="ynab">

     
      <Ynab
       news = {this.state.news}
      />
    
      

      </div>
    
    
    );
  }
}
 
export default App;