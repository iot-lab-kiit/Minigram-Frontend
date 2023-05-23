import Link from "next/link";
import React, { useState } from "react";
import styles from '../styles/Login.module.css';
function SignIn() {
  const [data, setData] = useState({
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
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
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
