import axios from "axios";

const BASE_URL = "http://localhost:5000/api"

const app = axios.create({
    baseURL : BASE_URL ,
    withCredentials : true , 
})

export const http ={
    get : app.get ,
    post : app.post ,
    delete : app.delete , 
    put : app.put ,
    patch : app.patch 
}


app.interceptors.request.use(
    (res) => res ,
    (err) => Promise.reject(err)
)

// response 401 error handling proccess
app.interceptors.response.use(
    (res) => res ,
    async (err) => {
        const originalConfig = err.config;
        
        if (err.response.status  === 401 && !originalConfig._retry ) {
            originalConfig._retry = true; 
            try {
                const { data } = await axios.get(   `${BASE_URL}/user/refresh-token`  , {withCredentials :true} )
                if (data) return app(originalConfig)
            } catch (error) {
                return Promise.reject(err)
            }
        }
        return Promise.reject(err)
    }
)


export default http;