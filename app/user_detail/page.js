import UserForm from '@/components/user_form/user_form';
import styles from '../page.module.css';

export default function UserDetail() {
  return (
    <main className={styles.main}>
      <label>User Details</label>
      <UserForm/>
    </main>
  )
}