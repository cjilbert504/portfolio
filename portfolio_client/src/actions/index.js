import railsAPI from '../apis/railsAPI';
    
export const fetchBlogs = () => async (dispatch) => {
    const response = await railsAPI.get("/blog_posts");

    dispatch({ type: "FETCH_BLOGS", payload: response.data })
};