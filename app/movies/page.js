"use client";

import { useState } from 'react';
import styles from '../page.module.css';

export default function Movies() {
  const [movies,setMovies] = useState([]);

  return (
    <main className={styles.main}>
      <label>MOVIES</label>

      <label>
        Search
        <input type='text' placeholder='Password...'/>
      </label>
      <br/>

      {
        movies.length > 0 && movies.forEach(ele => {
          <label>ele.name</label>
        })
      }
    </main>
  )
}