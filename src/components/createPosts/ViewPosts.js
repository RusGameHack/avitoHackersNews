import {useState} from 'react';
import IdPosts from './IdPosts';

function ViewPosts() {
  function ClickBtn(e){
    e.preventDefault();
    setIdPosts(" ");
    setTimeout(() => {
      setIdPosts(<IdPosts />);
    }, 10);
  }
  const [idPosts, setIdPosts] = useState(<IdPosts />);
  setInterval(() => {
    setIdPosts(" ");
    setTimeout(() => {
      setIdPosts(<IdPosts />);
    }, 10);
  }, 60000);
  return (
    <div className="view-posts">
      <button 
        className='reloadBtn'
        onClick={(e)=>{ClickBtn(e)}} 
      >
          Reload
      </button>
      <div className='new-block'>
        {idPosts}
      </div>
    </div>
  );
}

export default ViewPosts;