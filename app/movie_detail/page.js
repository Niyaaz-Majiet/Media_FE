import MediaForm from '@/components/movie_form/media_form';
import styles from '../page.module.css';

export default function MovieDetail() {
  return (
    <main className={styles.main}>
      <label>MOVIE DETAIL</label>
      <MediaForm/>
    </main>
  )
}