import CreatePost from "./CreatePost";
import "./Post.css";

function Post(newProps) {
    const id = newProps.match.params.params;
    console.log(`ID Поста: ${id}`);
    return(
    <div>
        <CreatePost key={id} item={id} />
    </div>
    )
}
export default Post;