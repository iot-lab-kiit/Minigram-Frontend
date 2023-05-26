import React, { Fragment } from 'react'
import { Sidebar } from '../Sidebar'
import classes from './Search.module.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const searchD = [
    {id:'i1', title:'culture', bg:'#11f07e'},
    {id:'i2', title:'Bussiness', bg:'#q6c456'},
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
    return (
  
          <Fragment>

            <Sidebar/>
              <div className={`container  mx-auto justify-center items-end flex flex-col space-y-32 ${classes.customsize}`}>
                  <form className={` relative ${classes.form}`}>
                      <input  type='text' placeholder='Search User/Group/Pages' className='py-2   placeholder:text-3xl'></input>
                      <div className='absolute top-5 left-4'>
                          <SearchOutlinedIcon style={{width:'4rem', height:'4rem', fill:'white'}}/>
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