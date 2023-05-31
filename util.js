

export const getAllPosts = async () => {
    
    try{
        const response = await fetch('https://minigram-backend.onrender.com/post');
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log(err)
        return err;
    }
    
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