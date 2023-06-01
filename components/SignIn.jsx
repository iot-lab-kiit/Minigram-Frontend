import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Login.module.css";
// import { signin } from "../pages/api/api";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signin } from '../redux/actions/auth';

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // console.log(data);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.username === "" || data.email === "" || data.password === "") {
      alert("Please fill in the required details");
    } else {
      dispatch(signin(data));
      router.push('/');
    }
  };
  return (
      <div className={styles.miniGramLogin}>
        <div className={styles.miniGramLoginContainer}>
          <div className={styles.miniGramLoginSubContainer}>
            <div className={styles.miniGramLoginContainerSignInContent}>
              <h2>Welcome Back</h2>
              <p>Welcome back! Please enter your details</p>
            </div>
            <form className={styles.miniGramLoginInfo} onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={data.email}
              />
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Enter Username"
                onChange={handleChange}
                value={data.username}
              />
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                value={data.password}
              />
              <button>Sign in</button>
            </form>
            {/* <Link href="/forgotpassword">Forgot password?</Link> */}
          </div>
        </div>
      </div>
  );
}

export default SignIn;
