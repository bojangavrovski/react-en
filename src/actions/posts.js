export const postFetchErrorAction = (err) => {
    return { 
        type: "POST_FETCH_ERROR",
        hasError: err
    };
}

export const postLoadingAction = (loading) => {
    return {
        type: "POST_LOADING",
        isLoading: loading
    }
}

export const postSuccessAction = (posts) => {
    return {
        type: "POST_SUCCESS",
        posts
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(postLoadingAction(true))

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch(postSuccessAction(data)))
        .catch(err => dispatch(postFetchErrorAction(true)))
    }
}

