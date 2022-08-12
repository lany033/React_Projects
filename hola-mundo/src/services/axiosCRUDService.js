import axios from 'axios'


export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    //Returns the response with a promise
    return axios.post('https://reqres.in/api/login', body)
}

export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

export const getUsersByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

export const createUser = (name, job) => {

    let body = {
        name: name,
        job: job
    }

    //Returns the response with a promise
    return axios.post('https://reqres.in/api/users', body)
}

export const updateUser = (id, name, job) => {

    let body = {
        name: name,
        job: job
    }

    //Returns the response with a promise
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

export const deleteUsersByID = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}