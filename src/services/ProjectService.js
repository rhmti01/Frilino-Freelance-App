import { http } from "./httpService";

export function getOwnerProjectApi() {
    http.get("/project/owner-projects").
    then(({data})=>data.data)
}