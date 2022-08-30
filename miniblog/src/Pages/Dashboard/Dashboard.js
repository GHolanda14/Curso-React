import styles from "./Dashboard.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Dashboard = () => {
  const user = useAuthValue();
  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments("posts", null, user.user.uid);

  const deleteDocument = async (id) => {
    const docRef = doc(db,"posts",id);
    await deleteDoc(docRef);
    return;
  };

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie seus posts</p>
      {loading && <p>Carregando posts...</p>}
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post!
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Título</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_body}>
                <p>{post.title}</p>
                <div className={styles.post_actions}>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn-outline btn-danger"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          {error && <p className="error">Algo deu errado!</p>}
        </>
      )}
    </div>
  );
};

export default Dashboard;
