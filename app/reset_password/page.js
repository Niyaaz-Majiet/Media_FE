import styles from '../page.module.css';

export default function ResetPassword() {
  return (
    <main className={styles.main}>
      <label>Reset Password</label>
      <label>
        EMAIL
        <input type='text' placeholder='Email...'/>
      </label>
      <label>
        OLD PASSWORD
        <input type='text' placeholder='Old Password...'/>
      </label>
      <br/>
      <label>
        NEW PASSWORD
        <input type='text' placeholder='New Password...'/>
      </label>
      <br/>

      <button>Login</button>
    </main>
  )
}