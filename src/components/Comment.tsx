import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment ({content, onDeleteComment}:CommentProps){
  const [likeCount, setLikeCount] = useState(0);
 
  function handleDeleteComment(){
    onDeleteComment(content);
  }
  
  function handleLikeComment(){
    setLikeCount(likeCount +1);
  }

  return(
  <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/vinibenso.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
              <div className={styles.authorAndTime}>
                  <strong>Vinicius Benso</strong>
                  <time title="27 de junho às 09:12" dateTime='2022-06-27 09:12:00'> Cerca de 2h atrás </time>
              </div>
              <button onClick={handleDeleteComment} title="Apagar Comentário">
                <Trash  size={24}/>
              </button>
          </header>
          <p> {content} </p>

        </div>

        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

  </div>
  )
}