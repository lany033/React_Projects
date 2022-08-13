import APIRequest from '../utils/axios.config'

export function getRandomJoke() {
    return APIRequest.get('/',{
        validateStatus: function (status) {
            return status < 500
        }
    })
}