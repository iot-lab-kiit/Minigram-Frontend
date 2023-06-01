import React from 'react'
import classes from './SearchDetail.module.css'
import { Cards } from './Cards'
const SearchDetail = ({user}) => {

  return (
    <div className={`min-h-screen flex flex-col px-7 md:px-3 items-center ${classes.detail}`}>
            {
                user ?
                <div className='flex flex-col gap-32 pt-[3rem]'>
                <div className='flex justify-between items-center justify-center gap-5'>
                    <div className='w-1/3'>
                        <img className='w-[100%] h-[100%] rounded-full' src={ !user.creator.profilePic ?  "https://i.pinimg.com/originals/c3/1a/ef/c31aef8b9be6067c4a1a82a4334fcc65.png" : user.creator.profilePic}/>
                    </div>
                <div>
                    <div className='flex  md:flex-row gap-10 justify-center items-center '>
                        <h1 className='text-4xl font-bold'>{user?.creator?.name}</h1>
                        <span className='py-3 px-5 bg-purple-900 text-white font-bold rounded-full text-2xl'>Follow</span>
                        <span className='py-3 px-5 border-2 border-purple-900 text-black font-bold rounded-full text-2xl'>Message</span>
                    </div>
                    <div className='flex gap-20'>
                        <h1 className='text-2xl'>{`${user.creator.posts.length} posts `}</h1>
                        <h1 className='text-2xl'>{`${user.creator.posts.length} likes `}</h1>
                    </div>

                    <div className='flex flex-col pt-[2rem] gap-1' >
                        <h1 className='text-3xl'>{user?.creator?.username}</h1>
                        <h1 className='text-3xl'>{user?.creator?.address}</h1>
                        <h1 className='text-3xl'>{user?.creator?.age}</h1>
                        <h1 className='text-3xl  font-bold '>{user?.creator?.bio}</h1>

                    </div>
                </div>
                </div>

                
                <div className='flex flex-col gap-10 font-bold'>
                    <h1 className='text-4xl'>Posts</h1>
                    {user?.creator?.posts?  <h1 className='text-5xl font-bold text-center text-purple-900 '>NO POSTS FOUND!</h1>:<Cards posts={user.creator.posts} />}
                    
                </div>
            </div> : <h1 className='text-5xl text-purple-900' >NO USER FOUND!</h1>
}           
    </div>
  )
}

export default SearchDetail
