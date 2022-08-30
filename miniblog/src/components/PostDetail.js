import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostDetail.module.css'

const PostDetail = ({post}) => {
  return (
    <div className={styles.post_detail}>
        <img src={post.imgUrl} alt={post.title} />
        <h2>{post.title}</h2>
        <p className={styles.createdBy}>{post.createdBy}</p>
        <div className={styles.tagsList}>
            {post.tagsArray.map((tag)=>(
                <p key={tag}>
                    <span>#</span>
                    {tag}
                </p>
            ))
            }
        </div>
        <Link to={`/posts/${post.id}`} className="btn btn-outline">Ler</Link>
    </div>
  )
}

export default PostDetail