import styles from './page.module.css'
import LoginForm from '../components/login_form/login_form'
import MediaBanner from '@/components/media_banner/media_banner'

export default function Home() {
  return (
    <main className={styles.main}>
      <label>Landing Page</label>
      <MediaBanner/>
      <LoginForm/>
    </main>
  )
}
