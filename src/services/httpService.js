import axios from "axios";

const app = axios.create({
    baseURL : "http://localhost:5000/api" ,
    withCredentials : true , 
})

const http ={
    get : app.get ,
    post : app.post ,
    delete : app.delete , 
    put : app.put ,
    patch : app.patch 
}

export default http;