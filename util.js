import { fetchPosts } from "./pages/api/api";


export const getAllPosts =  async () => {
    
   const posts = await fetchPosts();
    return posts.data;


}




export const getUserByName = async (usrname) => {
    const allUsers = await getAllPosts();
    const user = allUsers.find(item => item.creator.name === usrname);
    if(user){
        return user;
    }
    else{
        return {}
    }
}