import axiosWithAuth from '../auth/axiosWithAuth'

export const GET_ALL_POSTS_START = 'GET_ALL_POSTS_START'
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS'
export const GET_ALL_POSTS_ERROR = 'GET_ALL_POSTS_ERROR'

export const getAllItems = () => (dispatch) => {
    dispatch({type: GET_ALL_POSTS_START})
    axiosWithAuth()
        .get('/posts')
        .then((res) => {
            dispatch({type: GET_ALL_POSTS_SUCCESS, payload: res.data.data})
        })
        .catch((err) => {
            dispatch({type: GET_ALL_POSTS_ERROR, payload: err.message})
        })
}