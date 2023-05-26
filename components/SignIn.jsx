import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { signin } from "../pages/api/api";
import { useRouter } from 'next/router';
function SignIn() {
  const router =useRouter();

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
      alert("Please fill the required details");
    }
    setData({ ...data });
    console.log(data);
    await signin(data)
      .then((res) => {
        console.log(res);
        alert("Succesfully Login");
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
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
