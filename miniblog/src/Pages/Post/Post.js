import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);
  return (
    <div>
      {loading && <p>Carregando post...</p>}
      {post && (
        <div className={styles.post}>
          <h1>{post.title}</h1>
          <img alt={post.title} src={post.imgUrl} />
          <p>{post.body}</p>
          <h3>Esse post trata sobre: </h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag,i) => (
              <p key={i}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
