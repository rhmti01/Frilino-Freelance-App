import { http } from "./httpService";

export function getOwnerProjectApi() {
    return http.get("/project/owner-projects").
    then(({data})=>data.data)
}