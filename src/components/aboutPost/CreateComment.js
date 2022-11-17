/* Я бы с удовольствием все fetch укомплектовал бы в один компонент с выбором того, что отрисовать и что вызвать, 
но ввиду ограниченного времени, из-за того, что мне письмо пришло 15-го числа,
мне пришлось разделять на отдельные для экономии времени */
import {Component, useState} from "react";
import NormalDate from "../NormalDate";
import parse from "html-react-parser";

export default class CreateComment extends Component {
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    const kidsId = this.props.kids;
    console.log(kidsId)
    fetch(`https://hacker-news.firebaseio.com/v0/item/${kidsId}.json?print=pretty`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
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

  render(){
    const {error, isLoaded, items} = this.state;
    if (error){
      return <p>Error: {error.message} </p>
    } else if (!isLoaded){
      return <p></p>
    } else {
      const {Ccomment} = this.state;
      
      const btn = (e)=>{
        e.preventDefault();
        console.log(e.target.parentNode.querySelector('.New-comment'));
        if(e.target.parentNode.querySelector('.New-comment').hasChildNodes()){
          this.setState({Ccomment: ""});
        }else{
          this.setState({Ccomment: items.kids.map(kid => (<CreateComment key={kid} kids={kid}></CreateComment>))});
        }
      }
        return(
            <div className="post-block comment-block">
              {items.text? (<div className="block-left">
                    <div className="block-title">{items.title}</div>
                    <div className="block-by">By <span className="Autor">{items.by}</span></div>
                    <div className="block-text">{parse(String(items.text))}</div>
                    <div className="block-time"><NormalDate time={items.time}/></div>
                    {items.kids
                    ?(
                      <div 
                        className="Ccomments"
                        onClick={(e)=>{
                          btn(e);
                          console.log(e);
                        }}
                        >
                        {items.kids.length} comments
                      </div>)
                      :""
                    }
                    <div className="New-comment">
                      {this.state.Ccomment}
                    </div>
                </div>) : 
                (<div className="block-left">
                    <div className="block-text deleted">Deleted comment</div>
                    <div className="block-time"><NormalDate time={items.time}/></div>
                  </div>
                )}
                
            </div>
        )
    }
  }
}


