import styles from './user_form.module.css';

export default function UserForm() {
  return (
    <div className={styles.form_block}>
      <label>User</label>
      <label>
        Name
        <input type='text' placeholder='Email...'/>
      </label>
      <br/>
      <label>
        Surname
        <input type='text' placeholder='Password...'/>
      </label>
      <br/>
      <label>
        Email
        <input type='text' placeholder='Password...'/>
      </label>
      <br/>
      <label>
        Password
        <input type='text' placeholder='Password...'/>
      </label>
      <br/>
      <label>
        Confirm Password
        <input type='text' placeholder='Confirm Password...'/>
      </label>
      <br/>
      <button>Update/Register</button>
    </div>
  )
}