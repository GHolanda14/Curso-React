import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";

import styles from "./EditPost.module.css";
import { updateDoc,doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useAuthValue();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImgUrl(post.imgUrl);
      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(imgUrl);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL");
    }

    if (formError) return;

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    const docRef = doc(db,"posts",id);
    setLoading(true)
    updateDoc(docRef,{
      title,
      imgUrl,
      body,
      tagsArray,
    }).then(()=>{
      setLoading(false);
      navigate("/dashboard")
    })
    
  };

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Altere o post como desejar</p>

          <form onSubmit={handleSubmit}>
            <label>
              <span>Título</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Pense num bom título"
                required
              />
            </label>
            <label>
              <span>URL da Imagem</span>
              <input
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                placeholder="Insira uma imagem que represente o seu post"
                required
              />
            </label>
            <p className={styles.text_preview}>Preview da imagem atual</p>
            <img className={styles.image_preview} src={post.imgUrl} alt={post.title} />
            <label>
              <span>Conteúdo</span>
              <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Insira o conteúdo do seu post"
                required
              />
            </label>
            <label>
              <span>Tags</span>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Insira tags separadas por vígulas"
                required
              />
            </label>
            {formError && <p className="error">{formError}</p>}
            {!loading && (
              <button type="submit" className="btn">
                Editar
              </button>
            )}
            {loading && (
              <button type="submit" className="btn" disabled>
                Aguarde...
              </button>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
