import React, { Fragment, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar";
import classes from "../../styles/Search.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { useRouter } from "next/router";
import { fetchPosts } from "../api/api";
import Link from "next/link";

const Search = () => {
  const [userInp, setUserInp] = useState('');
  const [total, setTotal] = useState([]);
  const [suggestedUsernames, setSuggestedUsernames] = useState([]);

  useEffect(() => {
    fetchPosts().then((res) => {
      setTotal(res.data);
    });
  }, []);

  const router = useRouter();

  const searchInputChnageHandler = async (e) => {
    const userInput = e.target.value;
    setUserInp(userInput);

    if (userInput.length > 0) {
      // setIsFocus(true);
      const filteredUsernames = total.filter((username) =>
        username.creator.name.toLowerCase().startsWith(userInput.toLowerCase())
      );
      setSuggestedUsernames(filteredUsernames.slice(1,4));
    } else {
      setSuggestedUsernames([]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${userInp}`);
  };



  const searchD = [
    { id: "i1", title: "culture", bg: "#11f07e" , img:'https://i.ytimg.com/vi/OOGcoQEhZlw/maxresdefault.jpg', },
    { id: "i2", title: "Business", bg: "#919191", img:'https://images.businessnewsdaily.com/app/uploads/2019/03/25101809/Write-a-business-plan-1.png', },
    { id: "i3", title: "Education", bg: "#1a948e" , img:'https://researchleap.com/wp-content/uploads/2022/02/Our_Best_Education_Articles_of_2020.jpeg', },
    { id: "i4", title: "Health", bg: "#6c315a" ,img:'https://cloudinary.hbs.edu/hbsit/image/upload/s--sFv3MZbN--/f_auto,c_fill,h_375,w_750,/v20200101/D730ED9CC0AF1A0C18B3499EF75E86D7.jpg'},
    { id: "i5", title: "News", bg: "#21b113" ,img:'https://akm-img-a-in.tosshub.com/businesstoday/images/photo_gallery/201305/wall-street-journal_050213111213.jpg'},
    { id: "i6", title: "Science", bg: "#27ec4a", img:'https://open.science.gov/images/Year%20of%20Open%20Science_12-12.jpg' },
    { id: "i7", title: "History", bg: "#beb011",img:'https://alameda.edu/wp-content/uploads/2021/07/History.png' },
    { id: "i8", title: "Religion", bg: "#661619",img:'https://previews.123rf.com/images/peterhermesfurian/peterhermesfurian1504/peterhermesfurian150400080/39349972-religious-signs-on-colored-petals-assembling-around-a-heart-as-a-symbol-for-individuality-colorful.jpg' },
    { id: "i9", title: "Dev", bg: "#731285", img:'https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png' },
    { id: "i10", title: "Sports", bg: "#AEA397",img: 'https://wearesocial.com/us/wp-content/uploads/sites/2/2021/06/210517042_153825270044870_4141777913652635191_n-1024x683.jpg' },
    { id: "i11", title: "Crime", bg: "#22BD95", img:'https://knowlaw.in/wp-content/uploads/2020/07/Handcuffed-Man.jpg' },
  ];
  
  return (
    <Fragment>
      <Sidebar />
      <div
        className={`container min-h-screen  mx-auto justify-center items-end flex flex-col space-y-38 ${classes.customsize}`}
        onSubmit={submitHandler}
      >
        <form
          className={` relative ${classes.form} h-fit pb-[14rem]   flex flex-col`}
        >
          <div className={`${classes.searchBar}   `}>
            <SearchOutlinedIcon
              style={{ width: "3rem", height: "3rem", fill: "#c9c9c7" }}
            />
            <input
              onChange={searchInputChnageHandler}
              type="text"
              placeholder="Search User/Group/Pages"
              className="py-2   placeholder:text-2xl"
            ></input>
          </div>
          <div
            className={`w-[55%] ${
              suggestedUsernames.length <= 0 && "hidden"
            } `}
          >
            <ul
              className={`flex flex-col w-[100%] text-5xl ${
                suggestedUsernames > 0 && "p-10 mx-auto"
              } mx-auto gap-y-15`}
            >
              {suggestedUsernames.map((username) => (
                <Link className="pt-[1rem]" href={`/search/${username.creator.name}`}><li  key={username.id}  className="border-b-2 text-bold text-3xl  border-slate-300 p-4" >
                  {username.creator.name} 
                </li></Link>
              ))}
            </ul>
          </div>
        </form>
        <section className="text-white flex flex-col space-y-6">
          <h1 className="text-purple-600" >Browse All</h1>
          <div className={`grid grid-cols-6 gap-x-10 gap-y-10`}>
            {searchD.map((i) => (
              <div
                key={i.id}
                className={` shadow-2xl relative ${classes.filterCard}`}
                style={{ backgroundColor: i.bg }}
              >
                <span className={classes.cardHead}>{i.title}</span>
                <div className=" h-40 w-[100%]  rounded-full" >
                <img className="w-[100%] h-[100%] bg-contain bg-center rounded-xl shadow-2xl " src={i.img} alt={i.title}/>
              
                  </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Search;
