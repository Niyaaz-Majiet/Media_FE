import styles from './login_form.module.css';

export default function LoginForm() {
  return (
    <div className={styles.form_block}>
      <label>Login</label>
      <label>
        EMAIL
        <input type='text' placeholder='Email...'/>
      </label>
      <label>
        PASSWORD
        <input type='text' placeholder='Password...'/>
      </label>
      <br/>
      <button>Login</button>
      <a href='/user_detail'> ... Register ...</a>
      <a href='/reset_password'> ... Forgot password ...</a>
    </div>
  )
}