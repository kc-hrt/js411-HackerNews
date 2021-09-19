import React from "react";
import './App.css';

const URL = "https://hn.algolia.com/api/v1/search?tags=front_page";


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayOfNews: [], 
    }
  }


  componentDidMount(){
    console.log(this.state.arrayOfNews)
    fetch(URL)
      .then((response) => response.json())
      .then((data) => 
        this.setState({
          arrayOfNews: data
        }) 
        );
      } 


   render(){
    return (
      <div >
        hello
      </div>
     )
  };
};


export default App;