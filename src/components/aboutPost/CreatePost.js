import {Component} from "react";
import NormalDate from "../NormalDate";
import {Link} from "react-router-dom";
import CreateComment from "./CreateComment";
import parse from 'html-react-parser';

export default class CreatePost extends Component {
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
      return <p className="Loading">Loading...</p>
    } else {
        return(
          <div key={items.id}>
              <Link className="Back" to="/">Feed</Link>
              <div className="post-block">
                  <div className="block-by">By <span className="Autor">{items.by}</span></div>
                  {items.text?(<div className="block-title">{items.title}</div>):(<div className="block-title center">{items.title}</div>)}
                  {items.text?(<div className="block-text">{parse(items.text)}</div>):""}
                  {items.url?(<a className="look-link" target="blank" href={items.url}>Look at this</a>):""}
                  <div className="block-time"><NormalDate time={items.time}/></div>
                  {items.kids?(<div className="block-comments">{items.kids.length} comments</div>):""}
              </div>
              {items.kids? (<h1>Comments:</h1>) : (<h1>No-comments</h1>)}
              {items.kids? items.kids.map(kid=>
                <CreateComment key={items.kid} kids={[kid]}/>
              ): ''}
          </div>
            
            
        )
    }
  }
}


