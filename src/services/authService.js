import http from "./httpService";


// data => {phoneNumber : "09123456789"}

export function getOtop(data) {
    return http.post("/user/get-otp" , data)
}

export function checkOtop(data) {
    return http.post("/user/check-otp" , data)
}