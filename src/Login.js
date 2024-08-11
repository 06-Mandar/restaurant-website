import { useState } from 'react';
import styles from "./styles/login.module.css";
import { useNavigate } from 'react-router-dom';

const rusername = "Mandar"
const rpassword = "123";
export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      if (username === rusername && password === rpassword) {
        navigate('/home');
      }
    }
    return (
      <div className={styles.body}>
        <div className={styles.loginForm}>
          <h1>Login</h1>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label htmlFor='uname'>Enter Username:</label>
              <input
                id="uname"
                type="text"
                name="uname"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.row}>
              <label htmlFor='psswd'>Enter Password:</label>
              <input
                id="psswd"
                type="password"
                name='psswd'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.row}>
              <input type="submit" value="Login" />
              <input type="button" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    );
  }
  