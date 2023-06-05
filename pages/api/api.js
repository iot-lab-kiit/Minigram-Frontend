import axios from 'axios';

const API = axios.create({ baseURL: `https://minigram-backend.onrender.com/` }); 

//user api
export const signup=(newUser)=>API.post('/user/signup',newUser);
export const signin=(existingUser)=>API.post('/user/signin',existingUser);
export const searchUsers=(search)=>API.get(`/user/search?n=${search}`);
export const fetchUsers = () => API.get('/user');
export const fetchUser = (id) => API.get(`/user/${id}`);
export const updateUser = (id,updatedUser) => API.patch(`/user/${id}`,updatedUser);
export const deleteUser = (id) => API.delete(`/user/${id}`);

//post api
export const createPost=(newPost,token)=>API.post('/post',newPost,{ headers: { "Authorization" : `Bearer ${token}` }},{ withCredentials: true });
export const filterPosts=(search)=>API.get(`/post/search?q=${search}`);
export const fetchPost=(id)=>API.get(`/post/${id}`);
export const fetchPosts=()=>API.get('/post');
export const updatePost=(id,updatedPost,token)=>API.patch(`/post/${id}`,updatedPost,{ headers: { "Authorization" : `Bearer ${token}` }}, { withCredentials: true });
export const likePost=(postid,userid,token)=>API.patch(`/post/like?p=${postid}&u=${userid}`, { headers: { "Authorization" : `Bearer ${token}` }}, { withCredentials: true });
export const deletePost=(id,token)=>API.delete(`/post/${id}`, { headers: { "Authorization" : `Bearer ${token}` }}, { withCredentials: true });

//comment api
export const createComment=(id,comment,token)=>API.post(`/comments/${id}`,comment, { headers: { "Authorization" : `Bearer ${token}` }}, { withCredentials: true });
export const getComments=(id)=>API.get(`/comments/${id}`);
export const likeComments=(id,token)=>API.patch(`/comments/${id}`, { headers: { "Authorization" : `Bearer ${token}` }}, { withCredentials: true });
export const replyToComment=(id,reply,token)=>API.post(`/comments/reply/${id}`,reply, { headers: { "Authorization" : `Bearer ${token}` }}, { withCredentials: true });

//DMs
//conversation api
export const createDM=(newDM)=>API.post('/conversation',newDM);
export const getDM=(id)=>API.get(`/conversation/${id}`);
export const deleteDM=(id)=>API.delete(`/conversation/${id}`);
//message api
export const createMessage=(message, token)=>API.post('/messages',message, { headers: { "Authorization" : `Bearer ${token}` }}, { withCredentials: true });
export const getMessages=(id)=>API.get(`/messages/${id}`);
export const deleteMessages=(id)=>API.delete(`/messages/${id}`);
