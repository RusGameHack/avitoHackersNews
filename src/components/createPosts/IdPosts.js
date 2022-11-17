import {Component, useState} from "react";
import CreateNews from "./CreateNews";
import "./News.css";

export default class IdPosts extends Component {
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      btn: false,
      items: []
    };
  }

  componentDidMount(){
    const countSlice = 100;//Количество записей
    const fetchF = ()=>{
      fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.slice(0, countSlice)//Выделяем нужное количество элементов. В данном случае 100 самых новых постов
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    fetchF();
  }

  render(){
    const {error, isLoaded, items} = this.state;
    if (error){
      return <p>Error: {error.message} </p>
    } else if (!isLoaded){
      return <p className="loading">Loading...</p>
    } else {
        return(
            <div className="news">
              {items.map(item => (
                <CreateNews key={item} item={item}>
                </CreateNews>
              ))}
            </div>
          
        )
    }
  }
}
