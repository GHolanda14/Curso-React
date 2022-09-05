import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useInsertDocument } from "../../hooks/useInsertDocument";

import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const { loading, error } = useAuthentication();
  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    let erro = null;
    e.preventDefault();
    setFormError("");

    try {
      new URL(imgUrl);
    } catch (error) {
      erro = "A imagem precisa ser uma URL";
    }

    if (erro) {
      setFormError(erro);
      return;
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    insertDocument({
      title,
      imgUrl,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });
    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>Crie seu post!</h2>
      <p>Mostre ao mundo o que você deseja</p>

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
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
        {!response.loading && (
          <button type="submit" className="btn">
            Criar
          </button>
        )}
        {response.loading && (
          <button type="submit" className="btn" disabled>
            Aguarde...
          </button>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
