import styles from './media_form.module.css';

export default function MediaForm() {
  return (
    <div className={styles.media_form}>
      <div id="movie_frame"></div>
      <div id="movie_data"></div>
    </div>
  )
}