import React, { Fragment, useState } from 'react'
import classes from './SearchDetail.module.css'
import { useRouter } from 'next/router';
import SearchDetail from '../../components/SearchDetail';
import { getAllPosts, getUserByName } from '../../util';




const searchDetailPage =  (props) => {

  return (

        <div>
        <SearchDetail  user={props.user}/>
        </div>
  )
}


export const getStaticProps = async (context) => {
    const userName = context.params.searchInsId
    const user = await getUserByName(userName)
    
    return{
        props:{
            user:user,
        },
        revalidate:3600,
    }
}

export const getStaticPaths =  async () => {
    const allPosts =  await getAllPosts();
    const paths =  allPosts.map((user) => ({params:{searchInsId:user.creator.name}}))
    return{
        paths:paths,
        fallback:false,
    }
    

    
}


export default searchDetailPage