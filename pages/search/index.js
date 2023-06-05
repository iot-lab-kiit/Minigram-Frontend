import React, { Fragment } from 'react'
import { Sidebar } from '../../components/Sidebar'
import classes from '../../styles/Search.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { useRouter } from 'next/router';
 export const searchD = [
    {id:'i1', title:'culture', bg:'#11f07e'},
    {id:'i2', title:'Bussiness', bg:'#919191'},
    {id:'i3', title:'Education', bg:'#1a948e'},
    {id:'i4', title:'Health', bg:'#6c315a'},
    {id:'i5', title:'News', bg:'#21b113'},
    {id:'i6', title:'Science', bg:'#27ec4a'},
    {id:'i7', title:'History', bg:'#beb011'},
    {id:'i8', title:'Religion', bg:'#661619'},
    {id:'i9', title:'Dev', bg:'#731285'},
    {id:'i10', title:'Sports', bg:'#AEA397'},
    {id:'i11', title:'Crime', bg:'#22BD95'},
]


const Search = () => {

  

  const [userInp, setUserInp ] = useState('');


   const router = useRouter();


    const searchInputChnageHandler=  (e) => {
        setUserInp(e.target.value)
    }
    
    const submitHandler = (e) => {
        
        e.preventDefault();
        router.push(`/search/${userInp}`);
    }

    return (
  
          <Fragment>

            <Sidebar/>
              <div className={`container  mx-auto justify-center items-end flex flex-col space-y-38 ${classes.customsize}`} onSubmit={submitHandler}>
                  <form className={` relative ${classes.form}`}>
                    <div className={classes.searchBar}>
                    <SearchOutlinedIcon style={{width:'3rem', height:'3rem', fill:'#c9c9c7'}}/>
                      <input  onChange={searchInputChnageHandler} type='text' placeholder='Search User/Group/Pages' className='py-2   placeholder:text-2xl'></input>
                          
                      </div>
                  </form>
                  <section className='text-white flex flex-col space-y-6'>
                      <h1>Browse All</h1>
                      <div className={`grid grid-cols-6 gap-x-10 gap-y-10 pt-[6rem`}>
                       { searchD.map(i => (<div className={` shadow-2xl ${classes.filterCard}`} style={{backgroundColor:i.bg}}>
                           <span className={classes.cardHead}>{i.title}</span>
                           
                       </div>) )
}                      </div>
                  </section>
                  </div>
          </Fragment>
    )
  }
  
  export default Search