
import React,{useState} from 'react'
import { Cards } from '../components/Cards';
import { Sidebar } from '../components/Sidebar.js'
import { Messages } from '../components/Messages.js'
import  SignIn from "../components/SignIn"
import SignUp from '../components/SignUp';
import styles from '../styles/Home.module.css';
import { Sign } from 'crypto';

export default function index() {
  const [darkMode, setDarkMode] = useState(true);
  return (
        <div className={styles.homeContainer}>
          <Sidebar/>
          <Cards/>
          <Messages/>
          {/* <SignIn /> */}
        </div>
  )
}

