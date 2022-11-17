import {Component} from "react";
import NormalDate from "../NormalDate";
import {Link} from "react-router-dom";
import parse from 'html-react-parser';

export default class CreateNews extends Component {
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    const itemId = this.props.item;
    fetch(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json?print=pretty`)
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
        return(
            <div className="news-block">
                <div className="block-left">
                    <div className="block-title"><Link to={`/Post/${items.id}`}>{items.title}</Link></div>
                    <div className="block-by">By <span className="Autor">{items.by}</span></div>
                    {items.text ?(<div className="block-text news">{ parse(items.text)}</div>) : ''}
                    <div className="block-left-last">
                      <div className="block-time"><NormalDate time={items.time}/></div>
                      <div className="block-time">Score: {items.score}</div>
                    </div>
                    {items.kids?(<div><Link to={`/Post/${items.id}`}>{items.kids.length} comments</Link></div>):""}
                </div>
                <div className="block-right">
                  {items.text? <Link to={`/Post/${items.id}`}>Link</Link> : <a href={items.url} target="blank">Link</a>}
                </div>
            </div>
        )
    }
  }
}


